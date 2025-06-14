import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Events from '../pages/Events';
import AlumniDirectory from '../pages/AlumniDirectory';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PageNotFound from '../components/common/PageNotFound';

const AppRouter = () => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/alumni" element={<AlumniDirectory />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default AppRouter;