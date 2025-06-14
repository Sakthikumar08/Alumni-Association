import React, { useState } from 'react';
import GalleryCategories from '../components/sections/GalleryCategories';
import GalleryGrid from '../components/sections/GalleryGrid';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="container mx-auto px-4 py-12 mt-[50px]">
      <h1 className="text-3xl font-bold text-center mb-6">Photo Gallery</h1>
      <GalleryCategories onCategoryChange={setActiveCategory} />
      <GalleryGrid activeCategory={activeCategory} />
    </div>
  );
};

export default GalleryPage;