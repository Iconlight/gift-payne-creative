import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGallery from './components/ServicesGallery';
import Values from './components/Values';
import Director from './components/Director';
import ValueProps from './components/ValueProps';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <div className="app-loader">
        <div className="app-loader-content">
          <span className="app-loader-text">Making Magic Happen...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Values />
      <Director />

      <ServicesGallery />

      <ValueProps />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
