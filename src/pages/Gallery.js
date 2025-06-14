import React from 'react';
import { motion } from 'framer-motion';
import GalleryGrid from '../components/sections/GalleryGrid';
import GalleryCategories from '../components/sections/GalleryCategories';

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Memories Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Relive the cherished moments from past events and reunions
          </p>
        </motion.div>

        <GalleryCategories />
        <GalleryGrid />
      </div>
    </motion.div>
  );
};

export default Gallery;