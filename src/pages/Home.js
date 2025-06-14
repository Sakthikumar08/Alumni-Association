import React from 'react';
import Hero from '../components/sections/Hero';
import Events from '../components/sections/Events';
import Testimonials from '../components/sections/Testimonials';
import GalleryPreview from '../components/sections/GalleryPreview';
import StatsSection from '../components/sections/StatsSection';

const sampleEvents = [
  {
    id: 1,
    title: "Alumni Reunion",
    date: "June 15, 2023",
    description: "Annual gathering of all alumni"
  },
  // Add more sample events as needed
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <StatsSection />
      <Events events={sampleEvents} />
      <Testimonials />
      <GalleryPreview />
    </div>
  );
};

export default Home;