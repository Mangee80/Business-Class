import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout/PageLayout';
import Landing from './pages/landing/Landing';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<PlaceholderPage title="About" />} />
        <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
      </Routes>
    </PageLayout>
  );
}

// Temporary placeholder for other pages
const PlaceholderPage = ({ title }) => (
  <div style={{ 
    padding: '96px 24px', 
    textAlign: 'center',
    color: '#9A9A98',
    fontSize: '14px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase'
  }}>
    {title} - Coming Soon
  </div>
);

export default App;