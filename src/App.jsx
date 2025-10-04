import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServiceAreaBar from './components/ServiceAreaBar';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Spa from './pages/Spa';
import Packages from './pages/Packages';
import Business from './pages/Business';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';

export default function App(){
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-800 flex flex-col">
      <Navbar />
      <ServiceAreaBar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
      <Footer />
      <FloatingWhatsApp phone="+94 77 123 4567" />
    </div>
  )
}
