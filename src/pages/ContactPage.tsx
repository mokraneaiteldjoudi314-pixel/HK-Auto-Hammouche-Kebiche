import { useState } from 'react';
import { MapPin, Phone, Clock3 } from 'lucide-react';
import { siteConfig } from '../config/site';
import { supabase } from '../lib/supabase';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    const nextErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) nextErrors.name = 'Le nom est requis.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = 'Une adresse email valide est requise.';
    if (!formData.message.trim()) nextErrors.message = 'Le message est requis.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setSubmitStatus('error');
      setSubmitted(false);
      return;
    }

    if (!supabase) {
      setSubmitStatus('error');
      setSubmitted(false);
      return;
    }

    try {
      const { error } = await supabase.from('contact_requests').insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        source: 'hk-auto-demo',
      });

      if (error) {
        throw error;
      }

      setSubmitted(true);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Supabase contact submission failed:', error);
      setSubmitted(false);
      setSubmitStatus('error');
    }
  };

  return (
    <section className="section-shell">
      <div className="container contact-layout">
        <div className="contact-card">
          <p className="eyebrow">Contact</p>
          <h1>Parlez à notre équipe de démonstration.</h1>

          <div className="contact-meta">
            <div>
              <Phone size={18} />
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a>
            </div>
            <div>
              <MapPin size={18} />
              <span>{siteConfig.address}</span>
            </div>
            <div>
              <Clock3 size={18} />
              <span>{siteConfig.businessHours}</span>
            </div>
          </div>

          <div className="map-placeholder" aria-label="Carte à intégrer plus tard">
            Carte intégrable ultérieurement
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="name">Nom</label>
            <input
              id="name"
              value={formData.name}
              onChange={(event) => setFormData({ ...formData, name: event.target.value })}
            />
            {errors.name && <small>{errors.name}</small>}
          </div>

          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
            />
            {errors.email && <small>{errors.email}</small>}
          </div>

          <div className="field-group">
            <label htmlFor="phone">Téléphone</label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
            />
          </div>

          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
            />
            {errors.message && <small>{errors.message}</small>}
          </div>

          <div className="demo-note">
            {supabase
              ? 'Le formulaire est connecté à Supabase et enregistre les demandes dans la table contact_requests.'
              : 'Le formulaire est en mode démo local : aucune clé Supabase n’a été configurée pour l’envoi réel.'}
          </div>

          <button type="submit" className="button">
            Envoyer la demande
          </button>

          {submitted && submitStatus === 'success' && (
            <p className="success-message">Votre demande a bien été enregistrée dans Supabase.</p>
          )}

          {!submitted && submitStatus === 'error' && (
            <p className="error-message">Le formulaire n’a pas pu être envoyé. Vérifiez la configuration Supabase ou la validation.</p>
          )}
        </form>
      </div>
    </section>
  );
}
