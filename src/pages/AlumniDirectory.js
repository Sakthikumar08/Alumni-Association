import React, { useState } from 'react';
import SearchBar from '../components/ui/SearchBar';
import AlumniFilter from '../components/sections/AlumniFilter';
import AlumniGrid from '../components/sections/AlumniGrid';
import Photo1 from '../assets/images/priya.png';

const AlumniDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    batch: '',
    profession: '',
    location: ''
  });

  // Sample alumni data (replace with your actual data)
  const alumniData = [
    {
      id: 1,
      name: "Sarah Johnson",
      batch: 2015,
      profession: "Software Engineer",
      location: "North America",
      company: "Google",
      skills: ["JavaScript", "React", "Node.js"],
      linkedin: "#",
      twitter: "#",
      email: "sarah@example.com",
      avatar:`${Photo1}`
    },
    
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 mt-[100px]">
      <AlumniFilter onFilter={setFilters} />
      <div className="flex-1">
        <SearchBar onSearch={setSearchQuery} />
        <AlumniGrid 
          alumni={alumniData} 
          searchQuery={searchQuery} 
          filters={filters} 
        />
      </div>
    </div>
  );
};

export default AlumniDirectory;