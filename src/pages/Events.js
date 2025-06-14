import React from 'react';
import { motion } from 'framer-motion';
import EventsTimeline from '../components/sections/EventsTimeline';
import EventCategories from '../components/sections/EventCategories';
import UpcomingEvents from '../components/sections/UpcomingEvents';

const Events = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 bg-gray-50"
    >
      <div className="container mx-auto px-4 mt-[50px]">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Events & Reunions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with fellow alumni through our exciting events and activities
          </p>
        </motion.div>

        <UpcomingEvents />
        <EventCategories />
        <EventsTimeline />
      </div>
    </motion.div>
  );
};

export default Events;