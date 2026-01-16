import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEOManager from './components/SEOManager';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Weddings from './pages/Weddings';
import EventsEntertainment from './pages/EventsEntertainment';
import LocationsSchedule from './pages/LocationsSchedule';
import Instructors from './pages/Instructors';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Book from './pages/Book';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <SEOManager />
      <div className="min-h-screen bg-black text-white font-sans selection:bg-primary-400 selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/events-entertainment" element={<EventsEntertainment />} />
          <Route path="/locations" element={<LocationsSchedule />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
