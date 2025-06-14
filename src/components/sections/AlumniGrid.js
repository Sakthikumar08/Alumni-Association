import React from 'react';
import { motion } from 'framer-motion';

const AlumniGrid = ({ alumni = [], searchQuery = '', filters = {} }) => {
  const filteredAlumni = alumni.filter(alum => {
    // Search query filter
    const matchesSearch = 
      alum.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alum.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alum.skills?.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Additional filters
    const matchesBatch = !filters.batch || alum.batch === filters.batch;
    const matchesProfession = !filters.profession || alum.profession === filters.profession;
    const matchesLocation = !filters.location || alum.location === filters.location;
    
    return matchesSearch && matchesBatch && matchesProfession && matchesLocation;
  });

  return (
    <div className="flex-1">
      {filteredAlumni.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alum, index) => (
            <motion.div
              key={alum.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={alum.avatar || '/assets/images/avatars/default.jpg'} 
                    alt={alum.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{alum.name}</h3>
                    <p className="text-blue-600">{alum.profession}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p><i className="fas fa-graduation-cap mr-2"></i> Class of {alum.batch}</p>
                  <p><i className="fas fa-map-marker-alt mr-2"></i> {alum.location}</p>
                  {alum.company && <p><i className="fas fa-building mr-2"></i> {alum.company}</p>}
                </div>

                {alum.skills && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {alum.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex space-x-3">
                  {alum.linkedin && (
                    <a href={alum.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                  )}
                  {alum.twitter && (
                    <a href={alum.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                  )}
                  {alum.email && (
                    <a href={`mailto:${alum.email}`} className="text-gray-600 hover:text-gray-800">
                      <i className="fas fa-envelope text-xl"></i>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <i className="fas fa-user-friends text-4xl text-gray-400 mb-4"></i>
          <h3 className="text-xl font-medium text-gray-600">No alumni match your search criteria</h3>
          <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
        </div>
      )}
    </div>
  );
};

export default AlumniGrid;