import React from 'react';
import { Banner, ServicesSection, TrustSection } from './sections';

/**
 * Landing Page
 * Composes modular sections - easy to reorder, add, or remove
 * Each section will be designed individually based on references
 */
const Landing = () => {
  return (
    <>
      <Banner />
      <ServicesSection />
      <TrustSection />
    </>
  );
};

export default Landing;
