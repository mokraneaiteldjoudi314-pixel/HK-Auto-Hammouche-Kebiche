import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import { vehicleBrands, vehicleCategories, vehicles } from '../data/vehicles';

const sortOptions = [
  { label: 'Pertinence', value: 'featured' },
  { label: 'Prix croissant', value: 'price-asc' },
  { label: 'Prix décroissant', value: 'price-desc' },
  { label: 'Année récente', value: 'year-desc' },
];

export function CatalogPage() {
  const [search, setSearch] = useState('');
  const [brand, setBrand] = useState('all');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('featured');

  const filteredVehicles = useMemo(() => {
    const normalizedQuery = search.trim().toLowerCase();

    const next = vehicles.filter((vehicle) => {
      const matchesSearch =
        !normalizedQuery ||
        `${vehicle.brand} ${vehicle.model}`.toLowerCase().includes(normalizedQuery) ||
        vehicle.category.toLowerCase().includes(normalizedQuery);

      const matchesBrand = brand === 'all' || vehicle.brand === brand;
      const matchesCategory = category === 'all' || vehicle.category === category;

      return matchesSearch && matchesBrand && matchesCategory;
    });

    switch (sort) {
      case 'price-asc':
        return [...next].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
      case 'price-desc':
        return [...next].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
      case 'year-desc':
        return [...next].sort((a, b) => b.year - a.year);
      default:
        return next;
    }
  }, [brand, category, search, sort]);

  return (
    <section className="section-shell">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Catalogue</p>
            <h1>Découvrir les modèles de démonstration.</h1>
          </div>
          <div className="catalog-count">{filteredVehicles.length} résultat(s)</div>
        </div>

        <div className="filters-panel">
          <label className="field field--search">
            <Search size={16} />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Rechercher une marque ou un modèle"
              aria-label="Rechercher un véhicule"
            />
          </label>

          <label className="field">
            <span>Marque</span>
            <select value={brand} onChange={(event) => setBrand(event.target.value)}>
              <option value="all">Toutes</option>
              {vehicleBrands.map((brandName) => (
                <option key={brandName} value={brandName}>
                  {brandName}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Catégorie</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="all">Toutes</option>
              {vehicleCategories.map((categoryName) => (
                <option key={categoryName} value={categoryName}>
                  {categoryName}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Tri</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {filteredVehicles.length === 0 ? (
          <div className="empty-state">
            <SlidersHorizontal size={32} />
            <h3>Aucun véhicule ne correspond à votre recherche.</h3>
            <p>Essayez d’autres filtres ou revenez au catalogue complet.</p>
          </div>
        ) : (
          <div className="vehicle-grid vehicle-grid--catalog">
            {filteredVehicles.map((vehicle) => (
              <article key={vehicle.id} className="vehicle-card vehicle-card--catalog">
                <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} />
                <div className="vehicle-card__content">
                  <div className="vehicle-card__meta">
                    <span>{vehicle.brand}</span>
                    {vehicle.badge && <span className="badge">{vehicle.badge}</span>}
                  </div>
                  <h3>{vehicle.model}</h3>
                  <p>{vehicle.category} • {vehicle.year}</p>
                  <div className="vehicle-card__actions">
                    {vehicle.price ? <strong>{vehicle.price.toLocaleString('fr-DZ')} DZD</strong> : <span>Prix à confirmer</span>}
                    <Link to={`/vehicule/${vehicle.id}`}>Voir le modèle</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
