import React from 'react';
import { Item, FilterOptions } from '../types';
import FilterPanel from '../components/FilterPanel';
import ItemGrid from '../components/ItemGrid';
import HeroSection from '../components/HeroSection';

interface HomePageProps {
  items: Item[];
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

const HomePage: React.FC<HomePageProps> = ({ items, filters, onFiltersChange }) => {
  return (
    <div>
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80 flex-shrink-0">
            <FilterPanel filters={filters} onFiltersChange={onFiltersChange} />
          </aside>
          
          <main className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-secondary-900 mb-2">
                {filters.type === 'trip' ? 'Expériences de voyage' : 
                 filters.type === 'property' ? 'Propriétés immobilières' : 
                 'Toutes les offres'}
              </h2>
              <p className="text-secondary-600">
                {items.length} {items.length === 1 ? 'résultat trouvé' : 'résultats trouvés'}
              </p>
            </div>
            
            <ItemGrid items={items} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;