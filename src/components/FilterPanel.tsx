import React from 'react';
import { FilterOptions } from '../types';
import { Filter, X } from 'lucide-react';

interface FilterPanelProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFiltersChange }) => {
  const updateFilter = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const hasActiveFilters = Object.keys(filters).length > 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-secondary-100 p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-secondary-900 flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          Filtres
        </h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-primary-600 hover:text-primary-700 text-sm flex items-center"
          >
            <X className="w-4 h-4 mr-1" />
            Effacer
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Type de contenu */}
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-3">
            Type de contenu
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="type"
                value=""
                checked={!filters.type}
                onChange={() => updateFilter('type', undefined)}
                className="mr-3 text-primary-600"
              />
              <span className="text-sm">Tout</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="type"
                value="trip"
                checked={filters.type === 'trip'}
                onChange={() => updateFilter('type', 'trip')}
                className="mr-3 text-primary-600"
              />
              <span className="text-sm">Voyages</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="type"
                value="property"
                checked={filters.type === 'property'}
                onChange={() => updateFilter('type', 'property')}
                className="mr-3 text-primary-600"
              />
              <span className="text-sm">Immobilier</span>
            </label>
          </div>
        </div>

        {/* Localisation */}
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-3">
            Localisation
          </label>
          <input
            type="text"
            placeholder="Ville, pays..."
            value={filters.location || ''}
            onChange={(e) => updateFilter('location', e.target.value)}
            className="input-field"
          />
        </div>

        {/* Prix */}
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-3">
            Budget (EUR)
          </label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Min"
              value={filters.priceRange?.[0] || ''}
              onChange={(e) => {
                const min = parseInt(e.target.value) || 0;
                const max = filters.priceRange?.[1] || 10000000;
                updateFilter('priceRange', [min, max]);
              }}
              className="input-field"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.priceRange?.[1] || ''}
              onChange={(e) => {
                const max = parseInt(e.target.value) || 10000000;
                const min = filters.priceRange?.[0] || 0;
                updateFilter('priceRange', [min, max]);
              }}
              className="input-field"
            />
          </div>
        </div>

        {/* Filtres spécifiques aux voyages */}
        {filters.type === 'trip' && (
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-3">
              Catégorie
            </label>
            <select
              value={filters.category || ''}
              onChange={(e) => updateFilter('category', e.target.value || undefined)}
              className="input-field"
            >
              <option value="">Toutes les catégories</option>
              <option value="aventure">Aventure</option>
              <option value="culture">Culture</option>
              <option value="détente">Détente</option>
              <option value="gastronomie">Gastronomie</option>
              <option value="nature">Nature</option>
            </select>
          </div>
        )}

        {/* Filtres spécifiques à l'immobilier */}
        {filters.type === 'property' && (
          <>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-3">
                Type de transaction
              </label>
              <select
                value={filters.transactionType || ''}
                onChange={(e) => updateFilter('transactionType', e.target.value || undefined)}
                className="input-field"
              >
                <option value="">Vente et location</option>
                <option value="vente">Vente</option>
                <option value="location">Location</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-3">
                Type de bien
              </label>
              <select
                value={filters.propertyType || ''}
                onChange={(e) => updateFilter('propertyType', e.target.value || undefined)}
                className="input-field"
              >
                <option value="">Tous les types</option>
                <option value="appartement">Appartement</option>
                <option value="maison">Maison</option>
                <option value="villa">Villa</option>
                <option value="studio">Studio</option>
                <option value="loft">Loft</option>
                <option value="terrain">Terrain</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-3">
                Surface (m²)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.surfaceRange?.[0] || ''}
                  onChange={(e) => {
                    const min = parseInt(e.target.value) || 0;
                    const max = filters.surfaceRange?.[1] || 1000;
                    updateFilter('surfaceRange', [min, max]);
                  }}
                  className="input-field"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.surfaceRange?.[1] || ''}
                  onChange={(e) => {
                    const max = parseInt(e.target.value) || 1000;
                    const min = filters.surfaceRange?.[0] || 0;
                    updateFilter('surfaceRange', [min, max]);
                  }}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-3">
                Nombre de pièces
              </label>
              <select
                value={filters.rooms || ''}
                onChange={(e) => updateFilter('rooms', e.target.value ? parseInt(e.target.value) : undefined)}
                className="input-field"
              >
                <option value="">Indifférent</option>
                <option value="1">1 pièce</option>
                <option value="2">2 pièces</option>
                <option value="3">3 pièces</option>
                <option value="4">4 pièces</option>
                <option value="5">5+ pièces</option>
              </select>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;