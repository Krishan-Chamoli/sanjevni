import React from 'react';
import ScrollZoomEffect from './components/ScrollZoomEffect';
import SolutionsSection from './components/SolutionsSection';
import ServicesSection from './components/ServicesSection';
import PlasticPollution from './components/PlasticPollution';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <ScrollZoomEffect />
      <SolutionsSection />
      <ServicesSection />
      <PlasticPollution />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;
