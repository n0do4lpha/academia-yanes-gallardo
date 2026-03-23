import React from 'react';

import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import InstagramSection from './components/InstagramSection';
import ContactSection from './components/ContactSection';
import QuickNav from './components/QuickNav';

function App() {
  return (
    <>
      <QuickNav />
      <main style={{ position: 'relative' }}>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <InstagramSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
