import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductGrid({ products }) {
  const { addToCart } = useCart();
  // Fallback to empty array if products is undefined
  const displayProducts = products || [];

  return (
    <section className="py-16 bg-white" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 font-serif sm:text-4xl">
            Curated for You
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Handpicked selections that bring joy to your loved ones. Choose from our premium collection of gifts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col">
              <div className="relative aspect-square h-64 overflow-hidden bg-gray-200">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cream text-gray-800 shadow-sm border border-gold/20">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                  <Link to={`/product/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                <p className="text-xl font-bold text-gold mb-4">{product.price}</p>
                <div className="mt-auto">
                  <button
                    onClick={() => addToCart(product)}
                    className="relative w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold z-10"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
