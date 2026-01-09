import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-softpink/20">
          <p className="text-gray-600 mb-6 text-center">
            Have a question or need assistance? We're here to help!
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold sm:text-sm p-2 border"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold sm:text-sm p-2 border"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold sm:text-sm p-2 border"
                placeholder="How can we help you?"
              />
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-colors"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
