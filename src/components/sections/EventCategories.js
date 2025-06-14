import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EventCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Events', icon: 'fas fa-calendar' },
    { id: 'social', name: 'Social', icon: 'fas fa-glass-cheers' },
    { id: 'professional', name: 'Professional', icon: 'fas fa-briefcase' },
    { id: 'reunion', name: 'Reunions', icon: 'fas fa-users' },
    { id: 'sports', name: 'Sports', icon: 'fas fa-running' },
    { id: 'volunteer', name: 'Volunteer', icon: 'fas fa-hands-helping' }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Browse by Category
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`${category.icon} mr-2`}></i>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="bg-blue-50 rounded-xl p-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {activeCategory === 'all' 
              ? 'All Upcoming Events' 
              : `Showing ${categories.find(c => c.id === activeCategory)?.name}`
            }
          </h3>
          <p className="text-gray-600 mb-6">
            {activeCategory === 'all' 
              ? 'Browse all upcoming alumni events' 
              : `These are the ${categories.find(c => c.id === activeCategory)?.name.toLowerCase()} events coming soon`
            }
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300">
            <i className="fas fa-arrow-right mr-2"></i>
            View {activeCategory === 'all' ? 'All' : categories.find(c => c.id === activeCategory)?.name} Events
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventCategories;