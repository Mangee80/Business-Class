import React from 'react';
import { Banner, ServicesSection, TrustSection, DestinationsSection } from '../../components/sections';

/**
 * Landing Page
 * Composes modular sections - easy to reorder, add, or remove
 * Each section will be designed individually based on references
 */
const Landing = () => {
  return (
    <>
      <Banner />
      <TrustSection />
      <ServicesSection />
      {/* <DestinationsSection /> */}
    </>
  );
};

export default Landing;
