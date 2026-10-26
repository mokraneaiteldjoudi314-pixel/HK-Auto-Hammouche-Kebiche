import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { VehiclePage } from './pages/VehiclePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue" element={<CatalogPage />} />
          <Route path="/vehicule/:id" element={<VehiclePage />} />
          <Route path="/apropos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
