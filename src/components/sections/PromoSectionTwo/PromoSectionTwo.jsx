import React from 'react';

const PromoSectionTwo = () => {
  const styles = {
    section: {
      padding: '100px 0',
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
    },
    wrapper: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: '60px',
      alignItems: 'center',
    },
    content: {
      paddingRight: '40px',
    },
    badge: {
      display: 'inline-block',
      backgroundColor: '#f59e0b',
      color: 'white',
      padding: '8px 20px',
      fontSize: '13px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      borderRadius: '20px',
      marginBottom: '25px',
    },
    heading: {
      fontSize: '40px',
      fontWeight: 600,
      marginBottom: '25px',
      color: 'white',
      letterSpacing: '-0.5px',
      lineHeight: 1.2,
    },
    paragraph: {
      fontSize: '17px',
      color: '#cbd5e1',
      marginBottom: '30px',
      lineHeight: 1.8,
    },
    featuresList: {
      listStyle: 'none',
      marginBottom: '30px',
      padding: 0,
    },
    featureItem: {
      fontSize: '16px',
      color: '#e2e8f0',
      marginBottom: '12px',
      paddingLeft: 0,
    },
    button: {
      backgroundColor: '#f59e0b',
      color: 'white',
      padding: '15px 40px',
      fontSize: '16px',
      fontWeight: 500,
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
    },
    imageContainer: {
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
  };

  const handleButtonHover = (e) => {
    e.currentTarget.style.backgroundColor = '#d97706';
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = '0 6px 16px rgba(245, 158, 11, 0.4)';
  };

  const handleButtonLeave = (e) => {
    e.currentTarget.style.backgroundColor = '#f59e0b';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(245, 158, 11, 0.3)';
  };

  const features = [
    '✓ Flexible departure times',
    '✓ Direct flights to any destination',
    '✓ VIP ground handling',
    '✓ Customized in-flight services',
  ];

  return (
    <section style={styles.section}>
      <style>{`
        @media (max-width: 768px) {
          .promo-two-wrapper {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .promo-two-content {
            padding-right: 0 !important;
          }
          .promo-two-heading {
            font-size: 32px !important;
          }
        }
      `}</style>
      <div style={styles.container}>
        <div style={styles.wrapper} className="promo-two-wrapper">
          <div style={styles.content} className="promo-two-content">
            <span style={styles.badge}>Limited Time</span>
            <h2 style={styles.heading} className="promo-two-heading">Private Charter Services Available</h2>
            <p style={styles.paragraph}>
              Looking for complete privacy and flexibility? Our private charter services
              offer personalized flight schedules, luxury cabins, and dedicated crew for
              your journey.
            </p>
            <ul style={styles.featuresList}>
              {features.map((feature, index) => (
                <li key={index} style={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              style={styles.button}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={() => console.log('Request Quote clicked')}
            >
              Request Quote
            </button>
          </div>
          <div style={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80"
              alt="Private Charter"
              style={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSectionTwo;

