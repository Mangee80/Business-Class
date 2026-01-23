import React from 'react';

const PromoSectionOne = () => {
  const styles = {
    section: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: '100vh',
      backgroundColor: '#ffffff',
    },
    imageLeft: {
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    contentRight: {
      display: 'flex',
      alignItems: 'center',
      padding: '80px 70px',
      backgroundColor: '#f8fafc',
    },
    promoText: {
      maxWidth: '500px',
    },
    label: {
      display: 'inline-block',
      backgroundColor: '#2563eb',
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
      fontSize: '42px',
      fontWeight: 600,
      marginBottom: '25px',
      color: '#1e293b',
      letterSpacing: '-0.5px',
      lineHeight: 1.2,
    },
    paragraph: {
      fontSize: '17px',
      color: '#64748b',
      marginBottom: '20px',
      lineHeight: 1.8,
    },
    button: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '15px 40px',
      fontSize: '16px',
      fontWeight: 500,
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      marginTop: '15px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
    },
  };

  const handleButtonHover = (e) => {
    e.currentTarget.style.backgroundColor = '#1d4ed8';
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.4)';
  };

  const handleButtonLeave = (e) => {
    e.currentTarget.style.backgroundColor = '#2563eb';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
  };

  return (
    <section style={styles.section}>
      <style>{`
        @media (max-width: 768px) {
          .promo-section-one {
            grid-template-columns: 1fr !important;
          }
          .promo-content-right {
            padding: 50px 35px !important;
          }
          .promo-heading {
            font-size: 32px !important;
          }
        }
      `}</style>
      <div style={styles.imageLeft}>
        <img
          src="https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1200&q=80"
          alt="Business Class"
          style={styles.image}
        />
      </div>
      <div style={styles.contentRight} className="promo-content-right">
        <div style={styles.promoText}>
          <span style={styles.label}>Exclusive Offer</span>
          <h2 style={styles.heading} className="promo-heading">Experience Business Class Travel</h2>
          <p style={styles.paragraph}>
            Book your next business class flight with us and enjoy premium comfort,
            priority boarding, and exclusive lounge access at competitive rates.
          </p>
          <p style={styles.paragraph}>
            Our partnerships with leading airlines ensure you get the best deals
            on international routes. Fly in style without breaking the bank.
          </p>
          <button
            style={styles.button}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
            onClick={() => console.log('Book Now clicked')}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoSectionOne;

