import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />

      {/* Featured Section Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 font-serif sm:text-4xl">
              Curated for You
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Handpicked selections that bring joy to your loved ones.
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
             {/* Simple placeholders for now */}
             {[1, 2, 3].map((item) => (
               <div key={item} className="group relative">
                 <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                   <div className="h-full w-full bg-softpink/20 flex items-center justify-center text-gray-400">
                     Gift Item {item}
                   </div>
                 </div>
                 <div className="mt-4 flex justify-between">
                   <div>
                     <h3 className="text-sm text-gray-700">
                       <a href="#">
                         <span aria-hidden="true" className="absolute inset-0" />
                         Luxury Gift Box
                       </a>
                     </h3>
                     <p className="mt-1 text-sm text-gray-500">Gold & Pink</p>
                   </div>
                   <p className="text-sm font-medium text-gray-900">$89.00</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
           <p className="text-center text-base text-gray-400">
             &copy; 2024 Pealora Inc. All rights reserved.
           </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
