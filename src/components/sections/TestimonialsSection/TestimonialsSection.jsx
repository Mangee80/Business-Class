import React from 'react';

const TestimonialsSection = () => {
  const styles = {
    section: {
      padding: '100px 0',
      backgroundColor: '#f8fafc',
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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '35px',
      marginTop: '60px',
    },
    card: {
      backgroundColor: 'white',
      padding: '35px',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
    text: {
      fontSize: '16px',
      color: '#475569',
      lineHeight: 1.7,
      marginBottom: '24px',
      fontStyle: 'italic',
    },
    author: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '20px',
      borderTop: '1px solid #e2e8f0',
    },
    authorName: {
      fontSize: '16px',
      color: '#1e293b',
      fontWeight: 600,
      marginBottom: '6px',
    },
    authorTitle: {
      fontSize: '14px',
      color: '#94a3b8',
    },
  };

  const handleCardHover = (e) => {
    e.currentTarget.style.borderColor = '#cbd5e1';
    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
    e.currentTarget.style.transform = 'translateY(-3px)';
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.borderColor = '#e2e8f0';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const testimonials = [
    {
      text: "Excellent service and professional team. They made our corporate travel arrangements seamless and hassle-free. Highly recommend for business travel.",
      name: "John Smith",
      title: "CEO, Tech Company",
    },
    {
      text: "Reliable and efficient. Premium Aviation has been our go-to partner for all business travel needs. Great customer support and attention to detail.",
      name: "Sarah Johnson",
      title: "Operations Director",
    },
    {
      text: "Professional service from start to finish. The team understands luxury travel and delivers exceptional results every single time.",
      name: "Michael Brown",
      title: "Business Consultant",
    },
  ];

  return (
    <section style={styles.section}>
      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
          .testimonials-section-title {
            font-size: 32px !important;
          }
        }
      `}</style>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle} className="testimonials-section-title">Client Testimonials</h2>
        <div style={styles.grid} className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <p style={styles.text}>{testimonial.text}</p>
              <div style={styles.author}>
                <strong style={styles.authorName}>{testimonial.name}</strong>
                <span style={styles.authorTitle}>{testimonial.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

