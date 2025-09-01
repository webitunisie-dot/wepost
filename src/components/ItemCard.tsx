import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from '../types';
import { 
  MapPin, 
  Clock, 
  Users, 
  Home, 
  Bed, 
  Bath, 
  Square,
  Star,
  Calendar,
  Tag
} from 'lucide-react';

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const formatPrice = (price: number, currency: string, type?: string) => {
    const formatted = new Intl.NumberFormat('fr-FR').format(price);
    if (type === 'property' && (item as any).transactionType === 'location') {
      return `${formatted} ${currency}/mois`;
    }
    return `${formatted} ${currency}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'facile': return 'bg-green-100 text-green-800';
      case 'modéré': return 'bg-yellow-100 text-yellow-800';
      case 'difficile': return 'bg-red-100 text-red-800';
      default: return 'bg-secondary-100 text-secondary-800';
    }
  };

  const getEnergyRatingColor = (rating: string) => {
    switch (rating) {
      case 'A': case 'B': return 'bg-green-100 text-green-800';
      case 'C': case 'D': return 'bg-yellow-100 text-yellow-800';
      case 'E': case 'F': case 'G': return 'bg-red-100 text-red-800';
      default: return 'bg-secondary-100 text-secondary-800';
    }
  };

  return (
    <Link to={`/item/${item.id}`} className="block group">
      <div className="card group-hover:scale-[1.02] transition-all duration-300">
        <div className="relative">
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          {item.featured && (
            <div className="absolute top-3 left-3 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
              <Star className="w-3 h-3 mr-1" />
              Recommandé
            </div>
          )}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
            {item.type === 'trip' ? '🧳 Voyage' : '🏠 Immobilier'}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
            {item.title}
          </h3>
          
          <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
            {item.description}
          </p>

          <div className="flex items-center text-secondary-500 text-sm mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{item.location}</span>
          </div>

          {/* Informations spécifiques aux voyages */}
          {item.type === 'trip' && (
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-secondary-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{item.duration} jours</span>
                </div>
                <div className="flex items-center text-secondary-600">
                  <Users className="w-4 h-4 mr-1" />
                  <span>Max {item.maxParticipants}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                  {item.difficulty}
                </span>
                <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          )}

          {/* Informations spécifiques à l'immobilier */}
          {item.type === 'property' && (
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm text-secondary-600">
                <div className="flex items-center">
                  <Square className="w-4 h-4 mr-1" />
                  <span>{item.surface} m²</span>
                </div>
                <div className="flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  <span>{item.rooms} pièces</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-secondary-600">
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  <span>{item.bedrooms} ch.</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 mr-1" />
                  <span>{item.bathrooms} sdb</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.transactionType === 'vente' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                }`}>
                  {item.transactionType}
                </span>
                {item.energyRating && (
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEnergyRatingColor(item.energyRating)}`}>
                    DPE {item.energyRating}
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
            <div className="text-2xl font-bold text-secondary-900">
              {formatPrice(item.price, item.currency, item.type)}
            </div>
            <div className="flex items-center text-secondary-500 text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{new Date(item.createdAt).toLocaleDateString('fr-FR')}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;