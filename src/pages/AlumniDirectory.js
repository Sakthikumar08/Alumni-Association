import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AlumniFilter from '../components/sections/AlumniFilter';
import AlumniGrid from '../components/sections/AlumniGrid';
import SearchBar from '../components/ui/SearchBar';

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    batch: '',
    profession: '',
    location: ''
  });

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
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Alumni Directory</h1>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
            Find and connect with alumni from your batch or industry
          </p>
        </motion.div>

        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          placeholder="Search alumni by name, company, or skills..."
        />
        
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <AlumniFilter filters={filters} setFilters={setFilters} />
          <AlumniGrid searchTerm={searchTerm} filters={filters} />
        </div>
      </div>
    </motion.div>
  );
};

export default AlumniDirectory;