import React from 'react';
import Hero from '../components/Hero';
import PageTransition from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-8">
          Welcome to Pealora
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Discover our curated collection of premium gifts, designed to bring joy and elegance to every occasion.
        </p>
      </div>
    </PageTransition>
  );
}
