import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // In a real app, this would send to an API
    alert(`Subscribed with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand Info */}
          <div>
            <Link to="/" className="font-serif text-3xl font-bold text-white tracking-wide">
              Pealora<span className="text-gold">.</span>
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Premium gift shop dedicated to bringing happiness through curated, elegant gifts.
              Find the perfect present for every occasion.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-gold transition-colors">Shop Collection</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-medium text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                <span>Ahangama, Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <span>+94 76 608 8374</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <span>hello@pealora.com</span>
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Subscribe to our newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold text-white rounded-r-md hover:bg-yellow-600 transition-colors flex items-center"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pealora Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
