import React from 'react';
import { Hero, SearchForm, TrustSection } from './sections';

/**
 * Landing Page
 * Composes modular sections - easy to reorder, add, or remove
 * Each section will be designed individually based on references
 */
const Landing = () => {
  return (
    <>
      <Hero />
      <SearchForm />
      <TrustSection />
    </>
  );
};

export default Landing;
