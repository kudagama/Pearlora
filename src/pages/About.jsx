import React from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">About Pealora</h1>
          <p className="text-xl text-gray-600 mb-8">
            Pealora is more than just a gift shop; it's a celebration of connection and happiness.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-softpink/20 text-left">
            <p className="text-gray-700 mb-4">
              Founded with a passion for beautiful, thoughtful gifting, Pealora brings together a curated selection of premium items that speak to the heart. Our mission is to make every occasion special with gifts that are as meaningful as they are elegant.
            </p>
            <p className="text-gray-700 mb-4">
              We believe in quality, craftsmanship, and the power of a well-chosen gift to strengthen bonds and create lasting memories. Whether you're celebrating a birthday, an anniversary, or simply want to show someone you care, Pealora has something unique for you.
            </p>
            <p className="text-gray-700">
              Thank you for choosing Pealora to be part of your special moments.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
}
