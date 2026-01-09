import React, { useState, useMemo } from 'react';
import ProductGrid from '../components/ProductGrid';
import productsData from '../data/products.json';
import PageTransition from '../components/PageTransition';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    return ['All', ...new Set(productsData.map((p) => p.category))];
  }, []);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return productsData;
    }
    return productsData.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <PageTransition>
      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 text-center md:text-left">Our Collection</h1>
          <p className="mt-4 text-xl text-gray-500 text-center md:text-left">Find the perfect gift for your loved ones.</p>

          {/* Category Filter Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-cream hover:border-gold/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <ProductGrid products={filteredProducts} />
      </div>
    </PageTransition>
  );
}
