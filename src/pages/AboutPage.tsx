import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <section className="section-shell">
      <div className="container about-page">
        <div className="section-heading narrow">
          <p className="eyebrow">À propos</p>
          <h1>Une proposition visuelle pensée comme une expérience de marque premium.</h1>
        </div>

        <div className="about-grid">
          <article>
            <h3>Concept</h3>
            <p>
              Cette démonstration est un prototype de présentation commerciale pour une concession premium.
              Elle met en valeur des modèles de démonstration, un univers de luxe discret et une navigation
              claire orientée vers le lead generation.
            </p>
          </article>

          <article>
            <h3>Approche</h3>
            <p>
              L’idée est de proposer une expérience élégante, fluide et centrée sur les images, sans
              faire de promesses de vente, de prix ou de disponibilité non vérifiées. Les données sont
              identifiées comme fictives ou de démonstration.
            </p>
          </article>
        </div>

        <div className="about-panel">
          <div>
            <p className="eyebrow">Ce qui est volontairement exclu</p>
            <h3>Informations non vérifiées</h3>
          </div>
          <ul>
            <li>Historique de marque non confirmé</li>
            <li>Garanties ou offres non validées</li>
            <li>Prix et disponibilité réels non déclarés</li>
            <li>Engagements commerciaux non vérifiés</li>
          </ul>
        </div>

        <div className="cta-inline">
          <span>Prêt à la présentation ?</span>
          <Link to="/catalogue" className="button button--ghost">
            Voir le catalogue <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
