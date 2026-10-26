export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  category: 'SUV' | 'Coupé' | 'Berline' | 'Sport' | 'GT';
  year: number;
  price?: number;
  availability?: string;
  image: string;
  gallery: string[];
  description: string;
  badge?: string;
  isDemo: boolean;
};

export const vehicles: Vehicle[] = [
  {
    id: 'bmw-m4-csl',
    brand: 'BMW',
    model: 'M4 CSL',
    category: 'Sport',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7c5a8d102d0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Exemple de démonstration de coupe sportive premium. Les informations affichées ici sont à titre de présentation commerciale et doivent être confirmées avant toute mise en vente.',
    badge: 'Démonstration',
    isDemo: true,
  },
  {
    id: 'mercedes-amg-gt',
    brand: 'Mercedes-Benz',
    model: 'AMG GT',
    category: 'GT',
    year: 2023,
    image:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Fiche de démonstration pour une proposition de véhicule de luxe haut de gamme. Les éléments ne sont pas validés comme données commerciales réelles.',
    badge: 'Démonstration',
    isDemo: true,
  },
  {
    id: 'audi-rs5',
    brand: 'Audi',
    model: 'RS5 Sportback',
    category: 'Coupé',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Modèle utilisé dans la démonstration visuelle du catalogue premium. Le prix et la disponibilité restent à confirmer auprès du client avant validation.',
    badge: 'Démonstration',
    isDemo: true,
  },
  {
    id: 'range-rover-sport',
    brand: 'Range Rover',
    model: 'Sport',
    category: 'SUV',
    year: 2023,
    image:
      'https://images.unsplash.com/photo-1503376780353-7c5a8d102d0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7c5a8d102d0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Vignette conceptuelle de SUV premium pour la démonstration. Aucune donnée commerciale réelle n’a été ajoutée sans validation préalable.',
    badge: 'Démonstration',
    isDemo: true,
  },
];

export const vehicleBrands = Array.from(new Set(vehicles.map((vehicle) => vehicle.brand))).sort();
export const vehicleCategories = Array.from(new Set(vehicles.map((vehicle) => vehicle.category))).sort();
