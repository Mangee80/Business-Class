import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const styles = {
    section: {
      padding: '100px 0',
      backgroundColor: '#ffffff',
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
    subtitle: {
      textAlign: 'center',
      fontSize: '17px',
      color: '#64748b',
      marginTop: '-40px',
      marginBottom: '50px',
    },
    form: {
      maxWidth: '650px',
      margin: '0 auto',
      backgroundColor: '#f8fafc',
      padding: '50px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
    },
    formGroup: {
      marginBottom: '24px',
    },
    label: {
      display: 'block',
      fontSize: '15px',
      fontWeight: 500,
      color: '#1e293b',
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      padding: '14px 16px',
      fontSize: '15px',
      border: '1px solid #cbd5e1',
      borderRadius: '6px',
      fontFamily: 'inherit',
      backgroundColor: 'white',
      transition: 'all 0.2s ease',
      boxSizing: 'border-box',
    },
    textarea: {
      width: '100%',
      padding: '14px 16px',
      fontSize: '15px',
      border: '1px solid #cbd5e1',
      borderRadius: '6px',
      fontFamily: 'inherit',
      backgroundColor: 'white',
      transition: 'all 0.2s ease',
      resize: 'vertical',
      boxSizing: 'border-box',
    },
    submitButton: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '14px 36px',
      fontSize: '16px',
      fontWeight: 500,
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      width: '100%',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInputFocus = (e) => {
    e.target.style.outline = 'none';
    e.target.style.borderColor = '#2563eb';
    e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#cbd5e1';
    e.target.style.boxShadow = 'none';
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
          .contact-form {
            padding: 35px 25px !important;
          }
          .contact-section-title {
            font-size: 32px !important;
          }
        }
      `}</style>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle} className="contact-section-title">Contact Us</h2>
        <p style={styles.subtitle}>Get in touch with our team</p>
        <form style={styles.form} className="contact-form" onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              required
              placeholder="Your full name"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              required
              placeholder="your.email@example.com"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              rows="5"
              required
              placeholder="How can we help you?"
              style={styles.textarea}
            ></textarea>
          </div>
          <button
            type="submit"
            style={styles.submitButton}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

