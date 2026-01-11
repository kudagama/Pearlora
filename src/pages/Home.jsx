import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

import { categories } from '../data/categories';

export default function Home() {
  return (
    <PageTransition>
      <Hero />

      {/* Welcome Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal className="text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Welcome to Pealora
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our curated collection of premium gifts, designed to bring joy and elegance to every occasion.
            At Pealora, we believe every gift should tell a story.
          </p>
        </ScrollReveal>
      </div>

      {/* Featured Categories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12 text-center">Featured Categories</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <ScrollReveal key={category.name} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-serif font-bold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                      {category.description}
                    </p>
                    <Link
                      to="/products"
                      className="inline-block bg-gold text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-600 transition-colors w-fit"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
                  alt="About Pearlora"
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-softpink rounded-full -z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-full -z-0"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="lg:pl-8">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Founded with a passion for beautiful, thoughtful gifting, Pealora brings together a curated selection of premium items that speak to the heart. Our mission is to make every occasion special with gifts that are as meaningful as they are elegant.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We believe in quality, craftsmanship, and the power of a well-chosen gift to strengthen bonds and create lasting memories.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center text-lg font-semibold text-gold hover:text-yellow-600 transition-colors"
                >
                  Read our full story <span className="ml-2">→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

