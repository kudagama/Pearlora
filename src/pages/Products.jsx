import React, { useState, useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import productsData from '../data/products.json';
import { categories } from '../data/categories';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import { motion as Motion } from 'framer-motion';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];
    return productsData.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <PageTransition>
      <div className="pt-8 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              {selectedCategory ? selectedCategory : 'Our Collections'}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {selectedCategory
                ? `Explore our exquisite selection of ${selectedCategory.toLowerCase()}.`
                : 'Browse through our carefully curated categories to find the perfect gift.'}
            </p>
          </div>

          {!selectedCategory ? (
            /* Category Selection View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <ScrollReveal key={category.name} delay={index * 100}>
                  <Motion.div
                    whileHover={{ y: -10 }}
                    onClick={() => setSelectedCategory(category.name)}
                    className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white text-2xl font-serif font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          View Products
                        </span>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-gold transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {category.description}
                      </p>
                    </div>
                  </Motion.div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            /* Product List View */
            <div className="animate-fade-in-up">
              <div className="flex justify-between items-center mb-8">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center text-gray-600 hover:text-gold transition-colors font-medium group"
                >
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Categories
                </button>
                <span className="text-gray-500 text-sm">
                  Showing {filteredProducts.length} results
                </span>
              </div>

              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl text-gray-500">No products found in this category yet.</p>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="mt-4 text-gold hover:underline"
                  >
                    Browse other categories
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </PageTransition>
  );
}
