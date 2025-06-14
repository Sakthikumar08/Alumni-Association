import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AlumniFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    batch: '',
    profession: '',
    location: ''
  });

  const batchYears = Array.from({ length: 20 }, (_, i) => 2023 - i);
  const professions = ['Engineering', 'Medicine', 'Business', 'Arts', 'Education', 'Other'];
  const locations = ['North America', 'Europe', 'Asia', 'Africa', 'Australia', 'Remote'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const resetFilters = () => {
    setFilters({ batch: '', profession: '', location: '' });
    onFilter({ batch: '', profession: '', location: '' });
  };

  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md mb-8"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-4 text-gray-800">Filter Alumni</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
          <select
            name="batch"
            value={filters.batch}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Years</option>
            {batchYears.map(year => (
              <option key={year} value={year}>Class of {year}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
          <select
            name="profession"
            value={filters.profession}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Professions</option>
            {professions.map(prof => (
              <option key={prof} value={prof}>{prof}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Locations</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <button
          onClick={resetFilters}
          className="w-full mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors duration-300"
        >
          <i className="fas fa-redo mr-2"></i>
          Reset Filters
        </button>
      </div>
    </motion.div>
  );
};

export default AlumniFilter;