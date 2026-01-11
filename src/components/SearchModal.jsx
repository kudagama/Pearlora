import React, { useState, useMemo, useEffect } from 'react';
import { X, Search, Filter, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { categories } from '../data/categories';

export default function SearchModal({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
    const [sortBy, setSortBy] = useState('newest'); // newest, price-low-high, price-high-low

    // Reset filters when modal opens/closes
    useEffect(() => {
        if (!isOpen) {
            setQuery('');
            setSelectedCategory('All');
            setPriceRange({ min: 0, max: 1000 });
            setSortBy('newest');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    // Extract max price from data for the slider
    const maxProductPrice = useMemo(() => {
        return Math.max(...productsData.map(p => parseFloat(p.price.replace('$', ''))));
    }, []);

    const filteredProducts = useMemo(() => {
        return productsData.filter(product => {
            const price = parseFloat(product.price.replace('$', ''));
            const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.description.toLowerCase().includes(query.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
            const matchesPrice = price >= priceRange.min && price <= priceRange.max;

            return matchesQuery && matchesCategory && matchesPrice;
        }).sort((a, b) => {
            const priceA = parseFloat(a.price.replace('$', ''));
            const priceB = parseFloat(b.price.replace('$', ''));

            if (sortBy === 'price-low-high') return priceA - priceB;
            if (sortBy === 'price-high-low') return priceB - priceA;
            return 0; // Default (newest/id)
        });
    }, [query, selectedCategory, priceRange, sortBy]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-0 top-0 md:top-10 mx-auto max-w-4xl w-full bg-white md:rounded-2xl shadow-2xl z-[70] overflow-hidden max-h-[90vh] flex flex-col"
                    >
                        {/* Header / Search Bar */}
                        <div className="p-4 md:p-6 border-b border-gray-100 flex items-center gap-4">
                            <Search className="w-6 h-6 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search for gifts, flowers, cakes..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-1 text-xl md:text-2xl font-serif text-gray-900 placeholder-gray-300 focus:outline-none bg-transparent"
                                autoFocus
                            />
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                            {/* Sidebar Filters */}
                            <div className="w-full md:w-64 bg-gray-50 p-6 border-r border-gray-100 overflow-y-auto space-y-8">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <Filter className="w-4 h-4" /> Filters
                                    </h3>

                                    {/* Category Filter */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                        <select
                                            value={selectedCategory}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                            className="w-full p-2 bg-white border border-gray-200 rounded-md text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                                        >
                                            <option value="All">All Categories</option>
                                            {categories.map(cat => (
                                                <option key={cat.name} value={cat.name}>{cat.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Price Filter */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Price Range: ${priceRange.min} - ${priceRange.max}
                                        </label>
                                        <input
                                            type="range"
                                            min="0"
                                            max={Math.ceil(maxProductPrice + 50)}
                                            value={priceRange.max}
                                            onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                                            className="w-full accent-gold h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                        />
                                    </div>

                                    {/* Sort */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                                        <div className="space-y-2">
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    checked={sortBy === 'newest'}
                                                    onChange={() => setSortBy('newest')}
                                                    className="text-gold focus:ring-gold"
                                                />
                                                <span className="text-sm text-gray-600">Newest</span>
                                            </label>
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    checked={sortBy === 'price-low-high'}
                                                    onChange={() => setSortBy('price-low-high')}
                                                    className="text-gold focus:ring-gold"
                                                />
                                                <span className="text-sm text-gray-600">Price: Low to High</span>
                                            </label>
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    checked={sortBy === 'price-high-low'}
                                                    onChange={() => setSortBy('price-high-low')}
                                                    className="text-gold focus:ring-gold"
                                                />
                                                <span className="text-sm text-gray-600">Price: High to Low</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Results Area */}
                            <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-white min-h-[400px]">
                                <div className="mb-4 text-sm text-gray-500">
                                    Found {filteredProducts.length} results
                                </div>

                                {filteredProducts.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {filteredProducts.map(product => (
                                            <Link
                                                key={product.id}
                                                to={`/product/${product.id}`}
                                                onClick={onClose}
                                                className="group flex flex-col"
                                            >
                                                <div className="aspect-square rounded-xl overflow-hidden mb-3 relative bg-gray-100">
                                                    <img
                                                        src={product.image_url}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                                <h4 className="font-bold text-gray-900 group-hover:text-gold transition-colors">
                                                    {product.name}
                                                </h4>
                                                <p className="text-sm text-gray-500 line-clamp-1 mb-1">{product.description}</p>
                                                <div className="flex items-center justify-between mt-auto">
                                                    <span className="text-gold font-bold">{product.price}</span>
                                                    <span className="text-xs text-gray-400 group-hover:text-gold transition-colors flex items-center">
                                                        View <ArrowRight className="w-3 h-3 ml-1" />
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-gray-400">
                                        <Search className="w-16 h-16 mb-4 opacity-20" />
                                        <p className="text-lg">No products match your search.</p>
                                        <button
                                            onClick={() => {
                                                setQuery('');
                                                setSelectedCategory('All');
                                                setPriceRange({ min: 0, max: 1000 });
                                            }}
                                            className="mt-2 text-gold hover:underline"
                                        >
                                            Clear all filters
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
