export interface BaseItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  currency: string;
  location: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TripExperience extends BaseItem {
  type: 'trip';
  duration: number; // en jours
  maxParticipants: number;
  difficulty: 'facile' | 'modéré' | 'difficile';
  includes: string[];
  category: 'aventure' | 'culture' | 'détente' | 'gastronomie' | 'nature';
}

export interface RealEstateProperty extends BaseItem {
  type: 'property';
  propertyType: 'appartement' | 'maison' | 'villa' | 'studio' | 'loft' | 'terrain';
  transactionType: 'vente' | 'location';
  surface: number; // en m²
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  floor?: number;
  totalFloors?: number;
  yearBuilt?: number;
  energyRating?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  features: string[];
  furnished?: boolean;
}

export type Item = TripExperience | RealEstateProperty;

export interface FilterOptions {
  type?: 'trip' | 'property';
  priceRange?: [number, number];
  location?: string;
  category?: string;
  propertyType?: string;
  transactionType?: string;
  surfaceRange?: [number, number];
  rooms?: number;
}