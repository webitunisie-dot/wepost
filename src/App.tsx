import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ItemDetailPage from './pages/ItemDetailPage';
import { mockItems } from './data/mockData';
import { Item, FilterOptions } from './types';

function App() {
  const [items] = useState<Item[]>(mockItems);
  const [filters, setFilters] = useState<FilterOptions>({});

  const filteredItems = items.filter(item => {
    if (filters.type && item.type !== filters.type) return false;
    if (filters.location && !item.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (item.price < min || item.price > max) return false;
    }
    if (filters.category && item.type === 'trip' && item.category !== filters.category) return false;
    if (filters.propertyType && item.type === 'property' && item.propertyType !== filters.propertyType) return false;
    if (filters.transactionType && item.type === 'property' && item.transactionType !== filters.transactionType) return false;
    if (filters.surfaceRange && item.type === 'property') {
      const [min, max] = filters.surfaceRange;
      if (item.surface < min || item.surface > max) return false;
    }
    if (filters.rooms && item.type === 'property' && item.rooms !== filters.rooms) return false;
    
    return true;
  });

  return (
    <div className="min-h-screen bg-secondary-50">
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              items={filteredItems} 
              filters={filters} 
              onFiltersChange={setFilters} 
            />
          } 
        />
        <Route 
          path="/item/:id" 
          element={<ItemDetailPage items={items} />} 
        />
      </Routes>
    </div>
  );
}

export default App;