import { Link, useParams } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';
import { vehicles } from '../data/vehicles';

export function VehiclePage() {
  const { id } = useParams();
  const currentVehicle = vehicles.find((vehicle) => vehicle.id === id) ?? vehicles[0];

  const suggestions = vehicles.filter((vehicle) => vehicle.id !== currentVehicle.id).slice(0, 2);

  return (
    <section className="section-shell">
      <div className="container vehicle-detail">
        <div className="vehicle-detail__gallery">
          {currentVehicle.gallery.map((src, index) => (
            <img key={`${src}-${index}`} src={src} alt={`${currentVehicle.brand} ${currentVehicle.model} ${index + 1}`} />
          ))}
        </div>

        <div className="vehicle-detail__content">
          <div className="vehicle-card__meta">
            <span>{currentVehicle.brand}</span>
            {currentVehicle.badge && <span className="badge">{currentVehicle.badge}</span>}
          </div>
          <h1>{currentVehicle.model}</h1>
          <p className="vehicle-detail__subtitle">
            {currentVehicle.category} • {currentVehicle.year}
          </p>

          <div className="spec-list">
            {currentVehicle.price ? <div><span>Prix</span><strong>{currentVehicle.price.toLocaleString('fr-DZ')} DZD</strong></div> : null}
            {currentVehicle.availability ? (
              <div>
                <span>Disponibilité</span>
                <strong>{currentVehicle.availability}</strong>
              </div>
            ) : (
              <div>
                <span>Disponibilité</span>
                <strong>À confirmer</strong>
              </div>
            )}
          </div>

          <p>{currentVehicle.description}</p>

          <div className="vehicle-detail__actions">
            <a className="button" href={`mailto:contact@hkauto.demo?subject=${encodeURIComponent(currentVehicle.model)}`}>
              Demander des informations
            </a>

            <a
              className="button button--ghost"
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Bonjour, je souhaite plus d'informations sur ${currentVehicle.brand} ${currentVehicle.model}.`)}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container suggestions">
        <div className="section-heading">
          <p className="eyebrow">Suggestions</p>
          <h2>Autres modèles à découvrir</h2>
        </div>

        <div className="vehicle-grid">
          {suggestions.map((vehicle) => (
            <article key={vehicle.id} className="vehicle-card">
              <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} />
              <div className="vehicle-card__content">
                <div className="vehicle-card__meta">
                  <span>{vehicle.brand}</span>
                  {vehicle.badge && <span className="badge">{vehicle.badge}</span>}
                </div>
                <h3>{vehicle.model}</h3>
                <p>{vehicle.category} • {vehicle.year}</p>
                <Link to={`/vehicule/${vehicle.id}`}>
                  Voir la fiche <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
