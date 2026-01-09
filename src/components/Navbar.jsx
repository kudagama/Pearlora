import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-softpink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-3xl font-bold text-gray-800 tracking-wide">
              Pealora<span className="text-gold">.</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gold transition-colors font-medium">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-gold transition-colors font-medium">Shop</Link>
            <Link to="/products" className="text-gray-600 hover:text-gold transition-colors font-medium">Products</Link>
            <Link to="/about" className="text-gray-600 hover:text-gold transition-colors font-medium">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gold transition-colors font-medium">Contact</Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-gold transition-colors"
            >
              <Search className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="text-gray-600 hover:text-gold transition-colors"
            >
              <User className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-gold transition-colors relative"
              onClick={toggleCart}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-softpink text-gray-800 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gold focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-softpink/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold hover:bg-white" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold hover:bg-white" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold hover:bg-white" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold hover:bg-white" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
          <div className="pt-4 pb-4 border-t border-softpink/20">
             <div className="flex items-center justify-around px-5">
               <button className="text-gray-600 hover:text-gold flex flex-col items-center">
                  <Search className="w-5 h-5 mb-1" />
                  <span className="text-xs">Search</span>
               </button>
               <button className="text-gray-600 hover:text-gold flex flex-col items-center">
                  <User className="w-5 h-5 mb-1" />
                   <span className="text-xs">Account</span>
               </button>
               <button
                 className="text-gray-600 hover:text-gold flex flex-col items-center relative"
                 onClick={() => {
                   setIsOpen(false);
                   toggleCart();
                 }}
               >
                  <ShoppingBag className="w-5 h-5 mb-1" />
                  <span className="text-xs">Cart ({cartCount})</span>
               </button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
}
