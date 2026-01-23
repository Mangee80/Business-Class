import React from 'react';
import { 
  Banner, 
  ServicesSection, 
  TrustSection, 
  DestinationsSection,
  PartnersSection,
  PromoSectionOne,
  TestimonialsSection,
  ContactSection
} from '../../components/sections';

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
      <PartnersSection />
      <PromoSectionOne />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      {/* <DestinationsSection /> */}
    </>
  );
};

export default Landing;
