import React from 'react';
import ProductGrid from '../components/ProductGrid';

export default function Products({ addToCart }) {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900">Our Collection</h1>
        <p className="mt-4 text-xl text-gray-500">Find the perfect gift for your loved ones.</p>
      </div>
      <ProductGrid addToCart={addToCart} />
    </div>
  );
}
