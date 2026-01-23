import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="landing-page">
      {/* Services Logos Section */}
      <section className="services-logos">
        <div className="container">
          <h2 className="section-title">Who We Work With</h2>
          
          <div className="logos-grid">
            <div className="logo-item">
              <img src="https://logo.clearbit.com/emirates.com" alt="Emirates" />
            </div>
            <div className="logo-item">
              <img src="https://logo.clearbit.com/britishairways.com" alt="British Airways" />
            </div>
            <div className="logo-item">
              <img src="https://logo.clearbit.com/lufthansa.com" alt="Lufthansa" />
            </div>
            <div className="logo-item">
              <img src="https://logo.clearbit.com/qatarairways.com" alt="Qatar Airways" />
            </div>
            <div className="logo-item">
              <img src="https://logo.clearbit.com/singaporeair.com" alt="Singapore Airlines" />
            </div>
            <div className="logo-item">
              <img src="https://logo.clearbit.com/airfrance.com" alt="Air France" />
            </div>
            <div className="logo-item">
              <img src="https://logo.clearbit.com/ana.co.jp" alt="ANA" />
            </div>
            <div className="logo-item">
              <img src="https://logo.clearbit.com/etihad.com" alt="Etihad" />
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Section 1 - Split Layout */}
      <section className="promo-section-one">
        <div className="promo-image-left">
          <img 
            src="https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1200&q=80" 
            alt="Business Class" 
          />
        </div>
        <div className="promo-content-right">
          <div className="promo-text">
            <span className="promo-label">Exclusive Offer</span>
            <h2>Experience Business Class Travel</h2>
            <p>
              Book your next business class flight with us and enjoy premium comfort, 
              priority boarding, and exclusive lounge access at competitive rates.
            </p>
            <p>
              Our partnerships with leading airlines ensure you get the best deals 
              on international routes. Fly in style without breaking the bank.
            </p>
            <button className="promo-button">Book Now</button>
          </div>
        </div>
      </section>

      {/* Promotional Section 2 - Different Style */}
      <section className="promo-section-two">
        <div className="container">
          <div className="promo-two-wrapper">
            <div className="promo-two-content">
              <span className="promo-badge">Limited Time</span>
              <h2>Private Charter Services Available</h2>
              <p>
                Looking for complete privacy and flexibility? Our private charter services 
                offer personalized flight schedules, luxury cabins, and dedicated crew for 
                your journey.
              </p>
              <ul className="promo-features">
                <li>✓ Flexible departure times</li>
                <li>✓ Direct flights to any destination</li>
                <li>✓ VIP ground handling</li>
                <li>✓ Customized in-flight services</li>
              </ul>
              <button className="promo-button-alt">Request Quote</button>
            </div>
            <div className="promo-two-image">
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80" 
                alt="Private Charter" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Excellent service and professional team. They made our corporate travel arrangements 
                seamless and hassle-free. Highly recommend for business travel."
              </p>
              <div className="testimonial-author">
                <strong>John Smith</strong>
                <span>CEO, Tech Company</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Reliable and efficient. Premium Aviation has been our go-to partner for all 
                business travel needs. Great customer support and attention to detail."
              </p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>Operations Director</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Professional service from start to finish. The team understands luxury travel 
                and delivers exceptional results every single time."
              </p>
              <div className="testimonial-author">
                <strong>Michael Brown</strong>
                <span>Business Consultant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="contact-subtitle">Get in touch with our team</p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                placeholder="Your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows="5" 
                required
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
