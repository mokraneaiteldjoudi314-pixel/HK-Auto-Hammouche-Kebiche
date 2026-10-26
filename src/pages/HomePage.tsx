import { ArrowRight, Gauge, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import { Hero3D } from '../components/Hero3D';

const serviceHighlights = [
  { icon: Sparkles, title: 'Design premium', text: 'Présence visuelle raffinée, orientée luxe automobile. ' },
  { icon: Gauge, title: 'Expérience fluide', text: 'Navigation rapide et claire pour mobile comme pour bureau.' },
  { icon: ShieldCheck, title: 'Proposition commerciale', text: 'Démonstration prête à présenter sans dépendance backend.' },
];

export function HomePage() {
  const featuredVehicles = vehicles.slice(0, 3);

  return (
    <>
      <section className="hero section-shell">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">HK Auto • Démonstration commerciale</p>
            <h1>Une expérience automobile premium conçue pour impressionner.</h1>
            <p className="hero-subtitle">
              Une proposition visuelle et fonctionnelle destinée à présenter une offre haut de gamme,
              avec un catalogue, une fiche véhicule et une expérience immersive.
            </p>

            <div className="hero-actions">
              <Link className="button" to="/catalogue">
                Explorer les véhicules <ArrowRight size={16} />
              </Link>
              <Link className="button button--ghost" to="/contact">
                Nous contacter
              </Link>
            </div>

            <div className="hero-metrics">
              <div>
                <strong>3D</strong>
                <span>Scène premium</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Style luxe</span>
              </div>
              <div>
                <strong>RTL</strong>
                <span>Architecture préparée</span>
              </div>
            </div>
          </div>

          <Hero3D />
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Véhicules sélectionnés</p>
            <h2>Des références visuelles pour une présentation premium.</h2>
          </div>

          <div className="vehicle-grid">
            {featuredVehicles.map((vehicle) => (
              <article key={vehicle.id} className="vehicle-card">
                <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} />
                <div className="vehicle-card__content">
                  <div className="vehicle-card__meta">
                    <span>{vehicle.brand}</span>
                    {vehicle.badge && <span className="badge">{vehicle.badge}</span>}
                  </div>
                  <h3>{vehicle.model}</h3>
                  <p>{vehicle.category} • {vehicle.year}</p>
                  <Link to={`/vehicule/${vehicle.id}`}>Voir la fiche</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell muted-panel">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">Service</p>
            <h2>Une présence raffinée, pensée pour le luxe automobile.</h2>
          </div>

          <div className="feature-grid">
            {serviceHighlights.map(({ icon: Icon, title, text }) => (
              <article key={title} className="feature-card">
                <div className="feature-icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container experience-grid">
          <div>
            <p className="eyebrow">Expérience</p>
            <h2>Un parcours premium, du premier regard à la demande de devis.</h2>
          </div>
          <div className="experience-stack">
            <div>
              <strong>01</strong>
              <p>Catalogue immersif et élégant, pensé pour la découverte.</p>
            </div>
            <div>
              <strong>02</strong>
              <p>Fiches détaillées pour présenter les modèles avec contexte professionnel.</p>
            </div>
            <div>
              <strong>03</strong>
              <p>Contact direct et actions réelles à personnaliser ensuite.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell cta-shell">
        <div className="container cta-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Prêt à présenter votre collection en mode premium ?</h2>
          </div>
          <Link className="button" to="/contact">
            Demander une démonstration
          </Link>
        </div>
      </section>
    </>
  );
}
