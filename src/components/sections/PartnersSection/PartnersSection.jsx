import React from 'react';

const PartnersSection = () => {
  const styles = {
    section: {
      padding: '100px 0',
      background: 'linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
    },
    sectionTitle: {
      fontSize: '38px',
      fontWeight: 600,
      textAlign: 'center',
      marginBottom: '60px',
      color: '#1e293b',
      letterSpacing: '-0.5px',
    },
    logosGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
      maxWidth: '1100px',
      margin: '0 auto',
    },
    logoItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      backgroundColor: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    logoImage: {
      maxWidth: '130px',
      height: 'auto',
      opacity: 0.65,
      filter: 'grayscale(100%)',
      transition: 'all 0.3s ease',
    },
  };

  const airlines = [
    { name: 'Emirates', logo: 'https://logo.clearbit.com/emirates.com' },
    { name: 'British Airways', logo: 'https://logo.clearbit.com/britishairways.com' },
    { name: 'Lufthansa', logo: 'https://logo.clearbit.com/lufthansa.com' },
    { name: 'Qatar Airways', logo: 'https://logo.clearbit.com/qatarairways.com' },
    { name: 'Singapore Airlines', logo: 'https://logo.clearbit.com/singaporeair.com' },
    { name: 'Air France', logo: 'https://logo.clearbit.com/airfrance.com' },
    { name: 'ANA', logo: 'https://logo.clearbit.com/ana.co.jp' },
    { name: 'Etihad', logo: 'https://logo.clearbit.com/etihad.com' },
  ];

  const handleLogoHover = (e) => {
    e.currentTarget.style.borderColor = '#cbd5e1';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    e.currentTarget.style.transform = 'translateY(-3px)';
    const img = e.currentTarget.querySelector('img');
    if (img) {
      img.style.opacity = '1';
      img.style.filter = 'grayscale(0%)';
    }
  };

  const handleLogoLeave = (e) => {
    e.currentTarget.style.borderColor = '#e2e8f0';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.transform = 'translateY(0)';
    const img = e.currentTarget.querySelector('img');
    if (img) {
      img.style.opacity = '0.65';
      img.style.filter = 'grayscale(100%)';
    }
  };

  return (
    <section style={styles.section}>
      <style>{`
        @media (max-width: 768px) {
          .partners-logos-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          .partners-section-title {
            font-size: 32px !important;
          }
        }
      `}</style>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle} className="partners-section-title">Who We Work With</h2>
        <div style={styles.logosGrid} className="partners-logos-grid">
          {airlines.map((airline, index) => (
            <div
              key={index}
              style={styles.logoItem}
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            >
              <img src={airline.logo} alt={airline.name} style={styles.logoImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

