import { Item } from '../types';

export const mockItems: Item[] = [
  // Expériences de voyage
  {
    id: '1',
    type: 'trip',
    title: 'Safari au Kenya',
    description: 'Découvrez la faune sauvage du Kenya dans une aventure inoubliable à travers les parcs nationaux.',
    images: [
      'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
      'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg'
    ],
    price: 2500,
    currency: 'EUR',
    location: 'Nairobi, Kenya',
    featured: true,
    duration: 7,
    maxParticipants: 12,
    difficulty: 'modéré',
    includes: ['Hébergement', 'Repas', 'Guide expert', 'Transport'],
    category: 'aventure',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: '2',
    type: 'trip',
    title: 'Retraite Yoga en Toscane',
    description: 'Une semaine de détente et de bien-être dans les collines toscanes avec des cours de yoga quotidiens.',
    images: [
      'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg',
      'https://images.pexels.com/photos/1051840/pexels-photo-1051840.jpeg'
    ],
    price: 1200,
    currency: 'EUR',
    location: 'Toscane, Italie',
    featured: false,
    duration: 7,
    maxParticipants: 8,
    difficulty: 'facile',
    includes: ['Hébergement', 'Repas végétariens', 'Cours de yoga', 'Méditation'],
    category: 'détente',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10'
  },
  
  // Propriétés immobilières
  {
    id: '3',
    type: 'property',
    title: 'Appartement moderne centre-ville',
    description: 'Magnifique appartement rénové avec vue sur la ville, proche de tous les commerces et transports.',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg'
    ],
    price: 350000,
    currency: 'EUR',
    location: 'Lyon, France',
    featured: true,
    propertyType: 'appartement',
    transactionType: 'vente',
    surface: 85,
    rooms: 4,
    bedrooms: 2,
    bathrooms: 1,
    floor: 3,
    totalFloors: 5,
    yearBuilt: 2018,
    energyRating: 'B',
    features: ['Balcon', 'Parking', 'Ascenseur', 'Cave'],
    furnished: false,
    createdAt: '2024-01-12',
    updatedAt: '2024-01-12'
  },
  {
    id: '4',
    type: 'property',
    title: 'Villa avec piscine',
    description: 'Superbe villa familiale avec jardin paysager et piscine, dans un quartier résidentiel calme.',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg'
    ],
    price: 2800,
    currency: 'EUR',
    location: 'Cannes, France',
    featured: true,
    propertyType: 'villa',
    transactionType: 'location',
    surface: 180,
    rooms: 6,
    bedrooms: 4,
    bathrooms: 3,
    yearBuilt: 2015,
    energyRating: 'A',
    features: ['Piscine', 'Jardin', 'Garage', 'Terrasse', 'Climatisation'],
    furnished: true,
    createdAt: '2024-01-08',
    updatedAt: '2024-01-08'
  },
  {
    id: '5',
    type: 'trip',
    title: 'Circuit Gastronomique au Japon',
    description: 'Explorez la richesse culinaire du Japon à travers Tokyo, Kyoto et Osaka avec des chefs locaux.',
    images: [
      'https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg',
      'https://images.pexels.com/photos/2070486/pexels-photo-2070486.jpeg'
    ],
    price: 3200,
    currency: 'EUR',
    location: 'Tokyo, Japon',
    featured: false,
    duration: 10,
    maxParticipants: 6,
    difficulty: 'facile',
    includes: ['Hébergement', 'Cours de cuisine', 'Dégustations', 'Guide culinaire'],
    category: 'gastronomie',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-05'
  },
  {
    id: '6',
    type: 'property',
    title: 'Studio étudiant meublé',
    description: 'Studio parfait pour étudiant, entièrement meublé et équipé, proche université et transports.',
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg'
    ],
    price: 650,
    currency: 'EUR',
    location: 'Toulouse, France',
    featured: false,
    propertyType: 'studio',
    transactionType: 'location',
    surface: 25,
    rooms: 1,
    bedrooms: 1,
    bathrooms: 1,
    floor: 2,
    totalFloors: 4,
    yearBuilt: 2020,
    energyRating: 'C',
    features: ['Meublé', 'Internet', 'Kitchenette'],
    furnished: true,
    createdAt: '2024-01-03',
    updatedAt: '2024-01-03'
  }
];