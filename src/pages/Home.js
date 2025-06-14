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
    description: "Annual gathering of all alumni for networking and reminiscing"
  },
  {
    id: 2,
    title: "Career Fair",
    date: "September 8, 2023",
    description: "Connect with top employers and explore job opportunities"
  },
  {
    id: 3,
    title: "Mentorship Program Kickoff",
    date: "October 1, 2023",
    description: "Launch of our annual alumni-student mentorship initiative"
  }
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