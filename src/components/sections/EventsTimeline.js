import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    id: 1,
    date: "May 15, 2023",
    title: "Annual Alumni Gala",
    description: "An elegant evening of celebration at the Grand Ballroom with keynote speaker Dr. Sarah Johnson.",
    icon: "fas fa-glass-cheers"
  },
  {
    id: 2,
    date: "June 8, 2023",
    title: "Career Networking Workshop",
    description: "Interactive sessions with industry leaders from Google, Amazon, and local startups.",
    icon: "fas fa-briefcase"
  },
  {
    id: 3,
    date: "July 22, 2023",
    title: "10-Year Reunion",
    description: "Special gathering for the Class of 2013 with campus tours and memorabilia displays.",
    icon: "fas fa-users"
  },
  {
    id: 4,
    date: "August 12, 2023",
    title: "Alumni Golf Tournament",
    description: "Annual charity golf event at the University Golf Club with prizes and dinner reception.",
    icon: "fas fa-golf-ball"
  }
];

const EventsTimeline = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Events Timeline
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2"></div>
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-16`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex-1 px-6">
                <motion.div 
                  className={`bg-white p-8 rounded-xl shadow-lg relative ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`absolute top-6 ${
                    index % 2 === 0 ? '-right-2' : '-left-2'
                  } w-4 h-4 bg-purple-600 transform rotate-45`}></div>
                  <span className="text-sm font-semibold text-purple-600">{event.date}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2">{event.title}</h3>
                  <p className="text-gray-600 mt-3">{event.description}</p>
                  <button className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
                    <i className="fas fa-calendar-plus mr-2"></i>
                    Add to Calendar
                  </button>
                </motion.div>
              </div>
              
              <div className="w-16 flex flex-col items-center">
                <div className="w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500"></div>
                <div className="w-12 h-12 rounded-full bg-white border-4 border-purple-600 shadow-md flex items-center justify-center text-xl text-purple-600">
                  <i className={event.icon}></i>
                </div>
              </div>
              
              <div className="flex-1 px-6"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;