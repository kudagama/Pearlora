import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';
import productsData from '../data/products.json';

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <Link to="/products" className="text-gold hover:underline mt-4 inline-block">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-gold mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cream text-gray-800 border border-gold/20">
              {product.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-2xl font-bold text-gold mb-6">{product.price}</p>

          <div className="prose prose-sm text-gray-600 mb-8">
            <p className="text-lg leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-auto border-t border-gray-200 pt-8">
            <div className="flex items-center mb-6">
              <span className="mr-4 text-gray-700 font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-2 text-gray-600 hover:text-gold focus:outline-none"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-gray-900 font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-2 text-gray-600 hover:text-gold focus:outline-none"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={() => addToCart(product, quantity)}
              className="w-full md:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold shadow-lg"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
