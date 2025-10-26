import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  margin-top: 80px;
  padding: 60px 0;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 80px 0;
  color: white;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    padding: 60px 0;
    margin-bottom: 40px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  .info-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
    border-left: 4px solid #667eea;
  }

  .info-title {
    color: #2c3e50;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;

    .icon {
      margin-right: 0.75rem;
      margin-top: 0.25rem;
      font-size: 1.1rem;
      color: #667eea;
    }

    .content {
      flex: 1;

      strong {
        color: #2c3e50;
        display: block;
        margin-bottom: 0.25rem;
      }

      p {
        color: #666;
        margin: 0;
        line-height: 1.6;
      }
    }
  }
`;

const SocialMediaCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  border-left: 4px solid #667eea;

  .find-us-title {
    color: #2c3e50;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;

    .globe-icon {
      margin-right: 0.5rem;
    }
  }

  .get-in-touch {
    color: #666;
    margin-bottom: 1.5rem;
    font-style: italic;
  }

  .contact-section {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;

    .contact-item {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }

      .contact-icon {
        margin-right: 0.75rem;
        font-size: 1.1rem;
        color: #667eea;
      }

      .contact-text {
        color: #2c3e50;
        font-weight: 500;

        a {
          color: #667eea;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .social-title {
    color: #2c3e50;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: #f8f9fa;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 2px solid #e9ecef;
    font-weight: 700;
    font-size: 1rem;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    &.linkedin {
      color: #0077b5;
      &:hover {
        background: #0077b5;
        color: white;
        border-color: #0077b5;
      }
    }

    &.instagram {
      color: #e4405f;
      &:hover {
        background: #e4405f;
        color: white;
        border-color: #e4405f;
      }
    }

    &.facebook {
      color: #1877f2;
      &:hover {
        background: #1877f2;
        color: white;
        border-color: #1877f2;
      }
    }

    &.twitter {
      color: #1da1f2;
      &:hover {
        background: #1da1f2;
        color: white;
        border-color: #1da1f2;
      }
    }
  }

  .social-labels {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;

    .social-label {
      background: #e9ecef;
      color: #666;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;

const ContactForm = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);

  h3 {
    color: #2c3e50;
    margin-bottom: 1.5rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2c3e50;
    font-weight: 500;
  }

  input, textarea, select {
    width: 100%;
    padding: 12px;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #667eea;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  .submit-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    const token = process.env.REACT_APP_WEB3_TOKEN;
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', token); // Get from web3forms.com
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('service', formData.service);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('from_name', 'InfraByte IT Solutions Contact Form');
    formDataToSend.append('subject', `New Inquiry from ${formData.name}`);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer>
      <HeroSection>
        <div className="container">
          <h1>Contact Us</h1>
          <p style={{fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto 0'}}>
            Get in touch with our experts for comprehensive IT solutions and digital transformation services
          </p>
        </div>
      </HeroSection>

      <div className="container">
        <ContactGrid>
          <ContactInfo>
            <div className="info-card">
              <div className="info-title">📍 Registered Office</div>
              <div className="contact-item">
                <div className="content">
                  <p><strong>InfraByte IT Solutions</strong></p>
                  <p>4, Laxman Sawant Chawl, Jai Bhavani Mata Road, Amboli, Andheri (W), Mumbai, Maharashtra - 400 058</p>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-title">💼 Communication Address</div>
              <div className="contact-item">
                <div className="content">
                  <p><strong>Business Operations</strong></p>
                  <p>303, 3rd Floor, Rathod Niwas, Natwar Nagar, Jogeshwari East, Mumbai - 400060</p>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-title">📞 Contact Details</div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div className="content">
                  <strong>Phone</strong>
                  <p>+91 82992 34751</p>
                  <p>Available: Mon-Sat, 9:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">✉️</span>
                <div className="content">
                  <strong>Email</strong>
                  <p>contactus@infrabyteitsystem.com</p>
                  <p>Response within 24 hours</p>
                </div>
              </div>
            </div>

            <SocialMediaCard>
              <div className="find-us-title">
                <span className="globe-icon">🌐</span>
                Find Us
              </div>
              <div className="get-in-touch">Get in touch</div>

              <div className="contact-section">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span className="contact-text">+91 82992 34751</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span className="contact-text">
                    <a href="mailto:contactus@infrabyteitsystem.com">
                      contactus@infrabyteitsystem.com
                    </a>
                  </span>
                </div>
              </div>

              <div className="social-title">Social Media Handles</div>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/company/infrabyte-it-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  title="LinkedIn"
                >
                  in
                </a>

                <a
                  href="https://www.instagram.com/infrabyteitsystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  title="Instagram"
                >
                  ig
                </a>

                <a
                  href="https://www.facebook.com/infrabyteitsystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link facebook"
                  title="Facebook"
                >
                  fb
                </a>

                <a
                  href="https://twitter.com/infrabyteitsystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link twitter"
                  title="X (Twitter)"
                >
                  𝕏
                </a>
              </div>

              <div className="social-labels">
                <span className="social-label">LinkedIn</span>
                <span className="social-label">Instagram</span>
                <span className="social-label">Facebook</span>
                <span className="social-label">X</span>
              </div>
            </SocialMediaCard>
          </ContactInfo>

          <ContactForm>
                  <h3>Send Us a Message</h3>

                  {submitStatus === 'success' && (
                    <div style={{
                      background: '#d4edda',
                      color: '#155724',
                      padding: '15px',
                      borderRadius: '8px',
                      marginBottom: '1rem',
                      border: '1px solid #c3e6cb',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <span style={{fontSize: '1.2rem'}}>✅</span>
                      <div>
                        <strong>Message Sent Successfully!</strong><br />
                        Thank you for contacting us. We'll respond within 24 hours.
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div style={{
                      background: '#f8d7da',
                      color: '#721c24',
                      padding: '15px',
                      borderRadius: '8px',
                      marginBottom: '1rem',
                      border: '1px solid #f5c6cb',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <span style={{fontSize: '1.2rem'}}>❌</span>
                      <div>
                        <strong>Something went wrong!</strong><br />
                        Please try again or email us directly at <a href="mailto:contactus@infrabyteitsystem.com">contactus@infrabyteitsystem.com</a>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email address"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 82992 34751"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">Service Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      >
                        <option value="">Select a service</option>
                        <option value="Cloud & DevOps">Cloud & DevOps</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                        <option value="AI Automations">AI Automations</option>
                        <option value="Web & Domain Hosting">Web & Domain Hosting</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Enterprise Software">Enterprise Software</option>
                        <option value="Other Services">Other Services</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project requirements, timeline, and budget..."
                        disabled={isSubmitting}
                        rows="5"
                      ></textarea>
                    </div>

                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span style={{marginRight: '8px'}}>⏳</span>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <span style={{marginRight: '8px'}}>📧</span>
                          Send Message
                        </>
                      )}
                    </button>

                    <p style={{
                      fontSize: '0.85rem',
                      color: '#666',
                      marginTop: '1rem',
                      textAlign: 'center'
                    }}>
                      We respect your privacy. Your information is safe with us.
                    </p>
                  </form>
                </ContactForm>

        </ContactGrid>
      </div>
    </ContactContainer>
  );
};

export default Contact;
