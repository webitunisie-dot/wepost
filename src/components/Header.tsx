import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Plane, Building2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-secondary-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-secondary-900">MultiPlatform</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/?type=trip" 
              className="flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors"
            >
              <Plane className="w-4 h-4" />
              <span>Voyages</span>
            </Link>
            <Link 
              to="/?type=property" 
              className="flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors"
            >
              <Building2 className="w-4 h-4" />
              <span>Immobilier</span>
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="btn-secondary">
              Connexion
            </button>
            <button className="btn-primary">
              Publier
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;