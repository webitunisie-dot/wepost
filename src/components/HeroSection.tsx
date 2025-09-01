import React from 'react';
import { Search, Plane, Building2, MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Découvrez & Explorez
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Des expériences de voyage uniques et des propriétés exceptionnelles, 
            tout en un seul endroit
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-300" />
                <input
                  type="text"
                  placeholder="Où souhaitez-vous aller ?"
                  className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
              </div>
              
              <button className="bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg">
                <Search className="w-5 h-5" />
                <span>Rechercher</span>
              </button>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200">
                <Plane className="w-4 h-4" />
                <span>Voyages</span>
              </button>
              <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200">
                <Building2 className="w-4 h-4" />
                <span>Immobilier</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;