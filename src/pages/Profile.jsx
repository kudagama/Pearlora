import React, { useState } from 'react';
import { User, Package, MapPin, LogOut, CreditCard, Camera } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { motion as Motion } from 'framer-motion';

export default function Profile() {
    const [activeTab, setActiveTab] = useState('dashboard');

    const user = {
        name: "Alex Morgan",
        email: "alex.morgan@example.com",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        cover: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
    };

    const orders = [
        { id: '#ORD-7829', date: 'Oct 24, 2023', status: 'Delivered', total: '$145.00', items: 3 },
        { id: '#ORD-7830', date: 'Nov 02, 2023', status: 'Processing', total: '$89.00', items: 2 },
        { id: '#ORD-7831', date: 'Jan 15, 2024', status: 'Shipped', total: '$210.00', items: 4 },
    ];

    const addresses = [
        { type: 'Home', address: '123 Gold Coast Ave, Suite 400', city: 'Ahangama', zip: '80650', country: 'Sri Lanka', default: true },
        { type: 'Office', address: '45 Havelock Road', city: 'Colombo', zip: '00500', country: 'Sri Lanka', default: false },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                                <div className="p-3 bg-gold/10 rounded-full text-gold">
                                    <Package className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Total Orders</p>
                                    <p className="text-2xl font-bold text-gray-900">12</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                                <div className="p-3 bg-green-100 rounded-full text-green-600">
                                    <CreditCard className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Total Spent</p>
                                    <p className="text-2xl font-bold text-gray-900">$1,240</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                                <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Saved Addresses</p>
                                    <p className="text-2xl font-bold text-gray-900">2</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                <h3 className="text-lg font-bold text-gray-900">Recent Orders</h3>
                                <button
                                    onClick={() => setActiveTab('orders')}
                                    className="text-sm text-gold hover:text-yellow-600 font-medium"
                                >
                                    View All
                                </button>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {orders.map((order) => (
                                    <div key={order.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                        <div>
                                            <p className="font-medium text-gray-900">{order.id}</p>
                                            <p className="text-sm text-gray-500">{order.date}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium text-gray-900">{order.total}</p>
                                            <p className={`text-xs font-semibold px-2 py-1 rounded-full inline-block mt-1 
                        ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                                    order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                                                        'bg-yellow-100 text-yellow-700'}`}>
                                                {order.status}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'orders':
                return (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900">Order History</h3>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {orders.map((order) => (
                                <div key={order.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-gray-100 rounded-lg">
                                            <Package className="w-6 h-6 text-gray-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">{order.id}</p>
                                            <p className="text-sm text-gray-500">{order.items} items • {order.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between md:space-x-8">
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium 
                      ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                                order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-yellow-100 text-yellow-700'}`}>
                                            {order.status}
                                        </span>
                                        <p className="font-bold text-gray-900">{order.total}</p>
                                        <button className="text-gold hover:text-yellow-600 font-medium text-sm">View Details</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'addresses':
                return (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-900">My Addresses</h3>
                            <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                                Add New
                            </button>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {addresses.map((addr, index) => (
                                <div key={index} className="border border-gray-200 rounded-xl p-6 relative hover:border-gold transition-colors block">
                                    {addr.default && (
                                        <span className="absolute top-4 right-4 bg-gold/10 text-gold text-xs font-bold px-2 py-1 rounded-full">
                                            Default
                                        </span>
                                    )}
                                    <h4 className="font-bold text-gray-900 mb-2">{addr.type}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {addr.address}<br />
                                        {addr.city}, {addr.zip}<br />
                                        {addr.country}
                                    </p>
                                    <div className="mt-4 flex space-x-4">
                                        <button className="text-gray-500 hover:text-gray-900 text-sm font-medium">Edit</button>
                                        <button className="text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <PageTransition>
            <div className="min-h-screen bg-gray-50 pb-20">
                {/* Cover Image */}
                <div className="h-48 md:h-64 bg-gray-900 relative overflow-hidden">
                    <img
                        src={user.cover}
                        alt="Profile Cover"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Sidebar */}
                        <div className="w-full md:w-80 flex-shrink-0">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-24">
                                <div className="p-8 text-center border-b border-gray-100">
                                    <div className="relative inline-block">
                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                            className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                                        />
                                        <button className="absolute bottom-0 right-0 bg-gold text-white p-1.5 rounded-full shadow-sm hover:bg-yellow-600 transition-colors">
                                            <Camera className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <h2 className="mt-4 text-xl font-bold text-gray-900">{user.name}</h2>
                                    <p className="text-gray-500 text-sm">{user.email}</p>
                                </div>

                                <nav className="p-4 space-y-1">
                                    {[
                                        { id: 'dashboard', icon: User, label: 'Dashboard' },
                                        { id: 'orders', icon: Package, label: 'Orders' },
                                        { id: 'addresses', icon: MapPin, label: 'Addresses' },
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveTab(item.id)}
                                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200
                        ${activeTab === item.id
                                                    ? 'bg-gold/10 text-gold font-bold'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                                        >
                                            <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-gold' : 'text-gray-400'}`} />
                                            <span>{item.label}</span>
                                        </button>
                                    ))}

                                    <div className="pt-4 mt-4 border-t border-gray-100">
                                        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors">
                                            <LogOut className="w-5 h-5" />
                                            <span className="font-medium">Sign Out</span>
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1">
                            <Motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {renderContent()}
                            </Motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
