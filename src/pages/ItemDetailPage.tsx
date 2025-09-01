import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Item } from '../types';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Users, 
  Home, 
  Bed, 
  Bath, 
  Square,
  Star,
  Calendar,
  Check,
  Zap
} from 'lucide-react';

interface ItemDetailPageProps {
  items: Item[];
}

const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ items }) => {
  const { id } = useParams<{ id: string }>();
  const item = items.find(item => item.id === id);

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-secondary-900 mb-4">
          Élément non trouvé
        </h1>
        <Link to="/" className="btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  const formatPrice = (price: number, currency: string, type?: string) => {
    const formatted = new Intl.NumberFormat('fr-FR').format(price);
    if (type === 'property' && (item as any).transactionType === 'location') {
      return `${formatted} ${currency}/mois`;
    }
    return `${formatted} ${currency}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link 
        to="/" 
        className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour aux résultats
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Images */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {item.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${item.title} - Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl"
              />
            ))}
          </div>
        </div>

        {/* Informations principales */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.type === 'trip' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                }`}>
                  {item.type === 'trip' ? '🧳 Voyage' : '🏠 Immobilier'}
                </span>
                {item.featured && (
                  <span className="flex items-center text-yellow-600 text-sm">
                    <Star className="w-4 h-4 mr-1" />
                    Recommandé
                  </span>
                )}
              </div>
              
              <h1 className="text-2xl font-bold text-secondary-900 mb-4">
                {item.title}
              </h1>
              
              <div className="flex items-center text-secondary-600 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{item.location}</span>
              </div>
              
              <div className="text-3xl font-bold text-primary-600 mb-6">
                {formatPrice(item.price, item.currency, item.type)}
              </div>
            </div>

            {/* Détails spécifiques */}
            {item.type === 'trip' && (
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-secondary-100">
                  <div className="flex items-center text-secondary-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Durée</span>
                  </div>
                  <span className="font-medium">{item.duration} jours</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-secondary-100">
                  <div className="flex items-center text-secondary-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Participants max</span>
                  </div>
                  <span className="font-medium">{item.maxParticipants}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-secondary-100">
                  <span className="text-secondary-600">Difficulté</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.difficulty === 'facile' ? 'bg-green-100 text-green-800' :
                    item.difficulty === 'modéré' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.difficulty}
                  </span>
                </div>
              </div>
            )}

            {item.type === 'property' && (
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-secondary-100">
                  <div className="flex items-center text-secondary-600">
                    <Square className="w-4 h-4 mr-2" />
                    <span>Surface</span>
                  </div>
                  <span className="font-medium">{item.surface} m²</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-secondary-100">
                  <div className="flex items-center text-secondary-600">
                    <Home className="w-4 h-4 mr-2" />
                    <span>Pièces</span>
                  </div>
                  <span className="font-medium">{item.rooms}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-secondary-100">
                  <div className="flex items-center text-secondary-600">
                    <Bed className="w-4 h-4 mr-2" />
                    <span>Chambres</span>
                  </div>
                  <span className="font-medium">{item.bedrooms}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-secondary-100">
                  <div className="flex items-center text-secondary-600">
                    <Bath className="w-4 h-4 mr-2" />
                    <span>Salles de bain</span>
                  </div>
                  <span className="font-medium">{item.bathrooms}</span>
                </div>

                {item.energyRating && (
                  <div className="flex items-center justify-between py-3 border-b border-secondary-100">
                    <div className="flex items-center text-secondary-600">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>DPE</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      ['A', 'B'].includes(item.energyRating) ? 'bg-green-100 text-green-800' :
                      ['C', 'D'].includes(item.energyRating) ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {item.energyRating}
                    </span>
                  </div>
                )}
              </div>
            )}

            <button className="btn-primary w-full">
              {item.type === 'trip' ? 'Réserver maintenant' : 'Contacter l\'agent'}
            </button>
          </div>
        </div>
      </div>

      {/* Description détaillée */}
      <div className="lg:col-span-2">
        <div className="card p-6 mb-8">
          <h2 className="text-xl font-semibold text-secondary-900 mb-4">
            Description
          </h2>
          <p className="text-secondary-700 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Caractéristiques */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-secondary-900 mb-4">
            {item.type === 'trip' ? 'Inclus dans le prix' : 'Caractéristiques'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {item.type === 'trip' && item.includes.map((include, index) => (
              <div key={index} className="flex items-center text-secondary-700">
                <Check className="w-4 h-4 mr-3 text-green-600" />
                <span>{include}</span>
              </div>
            ))}
            
            {item.type === 'property' && item.features.map((feature, index) => (
              <div key={index} className="flex items-center text-secondary-700">
                <Check className="w-4 h-4 mr-3 text-green-600" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;