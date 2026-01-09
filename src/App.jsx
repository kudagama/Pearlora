import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <ProductGrid />

      {/* Footer Placeholder */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
           <p className="text-center text-base text-gray-400">
             &copy; 2024 Pealora Inc. All rights reserved.
           </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
