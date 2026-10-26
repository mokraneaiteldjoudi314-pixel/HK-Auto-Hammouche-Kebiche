import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../config/site';

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Catalogue', to: '/catalogue' },
  { label: 'À propos', to: '/apropos' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand-mark" aria-label="HK Auto accueil">
          <span className="brand-mark__word">HK</span>
          <span className="brand-mark__sub">AUTO</span>
        </Link>

        <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="button button--ghost" href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>
            Appeler
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Ouvrir le menu"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="brand-mark brand-mark--footer">
            <span className="brand-mark__word">HK</span>
            <span className="brand-mark__sub">AUTO</span>
          </div>
          <p className="muted">Démonstration commerciale pour présentation de véhicules premium.</p>
        </div>

        <div className="footer-links">
          <p>Contact</p>
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        <div className="footer-links">
          <p>Navigation</p>
          <Link to="/catalogue">Catalogue</Link>
          <Link to="/apropos">À propos</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
