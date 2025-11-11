import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  margin-top: 80px;
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 1280px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.3rem;
    color: #666;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
  }

  @media (max-width: 1280px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 60px;

  @media (max-width: 1280px) {
    gap: 3rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
    margin-bottom: 40px;
  }
`;

const FormSection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.05);

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 1280px) {
    padding: 2.5rem;

    h2 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;

    h2 {
      font-size: 1.5rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 600;
    color: #2c3e50;
    font-size: 0.95rem;
  }

  input, textarea, select {
    padding: 14px 18px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;
    background: #f8f9fa;
    color: #2c3e50;

    &:focus {
      outline: none;
      border-color: #667eea;
      background: white;
      box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
    }

    &::placeholder {
      color: #999;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  @media (max-width: 768px) {
    input, textarea, select {
      padding: 12px 16px;
      font-size: 0.95rem;
    }
  }
`;

const SubmitButton = styled.button`
  padding: 16px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  min-height: 44px;

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px 28px;
    font-size: 1rem;
  }
`;

const StatusMessage = styled.div`
  padding: 14px 18px;
  border-radius: 10px;
  font-weight: 500;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ${props => props.type === 'success' && `
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  `}

  ${props => props.type === 'error' && `
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  `}
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .icon {
      font-size: 1.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      color: white;
    }
  }

  @media (max-width: 1280px) {
    padding: 2rem;

    h3 {
      font-size: 1.35rem;

      .icon {
        width: 45px;
        height: 45px;
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.75rem;

    h3 {
      font-size: 1.25rem;

      .icon {
        width: 40px;
        height: 40px;
        font-size: 1.25rem;
      }
    }
  }
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  .label {
    font-weight: 700;
    color: #2c3e50;
    font-size: 0.95rem;
    min-width: 100px;
  }

  .value {
    color: #666;
    line-height: 1.7;
    font-size: 0.95rem;
    flex: 1;

    a {
      color: #667eea;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #764ba2;
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 1.25rem;

    .label {
      min-width: auto;
      font-size: 0.9rem;
    }

    .value {
      font-size: 0.9rem;
    }
  }
`;
const MapSection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.05);

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 2rem;
    text-align: center;
  }

  iframe {
    width: 100%;
    height: 500px;
    border: none;
    border-radius: 12px;
  }

  @media (max-width: 1280px) {
    padding: 2.5rem;

    h2 {
      font-size: 1.75rem;
    }

    iframe {
      height: 450px;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    iframe {
      height: 350px;
    }
  }
`;


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare form data for Web3Forms
      const formPayload = {
        access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your Web3Forms access key
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service || 'Not specified',
        message: formData.message,
        form_name: 'InfraByte IT System - Contact Form',
        subject: `New Contact Request from ${formData.name}`,
        from_name: 'InfraByte IT System',
        reply_to: formData.email
      };

      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formPayload)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'An error occurred while sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer>
      <Container>
        <HeroSection>
          <h1>Get In Touch</h1>
          <p>
            Get in touch with our experts for comprehensive IT solutions and digital transformation services
          </p>
        </HeroSection>

        <ContentGrid>
          <FormSection>
            <h2>Send Us a Message</h2>
            <Form ref={formRef} onSubmit={handleSubmit}>
              {submitStatus && (
                <StatusMessage type={submitStatus.type}>
                  {submitStatus.message}
                </StatusMessage>
              )}

              <FormRow>
                <FormGroup>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 82992 34751"
                    required
                    disabled={isSubmitting}
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    disabled={isSubmitting}
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={isSubmitting}
                >
                  <option value="">Select a service</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                  <option value="Digital Transformation">Digital Transformation</option>
                  <option value="Managed Services">Infrastructure Managed Services</option>
                  <option value="AI Automations">AI Automations</option>
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="Data Centre Solutions">Data Centre Solutions</option>
                  <option value="End User Computing">End User Computing</option>
                  <option value="Web & Domain Hosting">Web & Domain Hosting</option>
                  <option value="Custom Software">Custom Software Development</option>
                  <option value="Enterprise Software">Enterprise Software Solutions</option>
                  <option value="SaaS Solutions">SaaS Solutions</option>
                  <option value="Software Support">Software Maintenance & Support</option>
                  <option value="Other">Other</option>
                </select>
              </FormGroup>

              <FormGroup>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project and requirements..."
                  required
                  disabled={isSubmitting}
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                  </>
                ) : (
                  'Send Message'
                )}
              </SubmitButton>
            </Form>
          </FormSection>

          <InfoSection>
            <InfoCard>
              <h3>
                <span className="icon">📍</span>
                Our Locations
              </h3>
              <InfoItem>
                <span className="label">Registered Office:</span>
                <span className="value">
                  4, Laxman Sawant Chawl, Jai Bhavani Mata Road, Amboli, Andheri (W), Mumbai, Maharashtra - 400 058
                </span>
              </InfoItem>
              <InfoItem>
                <span className="label">Business Operations:</span>
                <span className="value">
                  303, 3rd Floor, Rathod Niwas, Natwar Nagar, Jogeshwari East, Mumbai - 400060
                </span>
              </InfoItem>
            </InfoCard>

            <InfoCard>
              <h3>
                <span className="icon">📞</span>
                Contact Information
              </h3>
              <InfoItem>
                <span className="label">Phone:</span>
                <span className="value">
                  <a href="tel:+918299234751">+91 82992 34751</a>
                </span>
              </InfoItem>
              <InfoItem>
                <span className="label">Available:</span>
                <span className="value">Mon-Sat, 9:00 AM - 7:00 PM IST</span>
              </InfoItem>
              <InfoItem>
                <span className="label">Email:</span>
                <span className="value">
                  <a href="mailto:contactus@infrabyteitsystem.com">contactus@infrabyteitsystem.com</a>
                </span>
              </InfoItem>
              <InfoItem>
                <span className="label">Response Time:</span>
                <span className="value">Within 24 hours</span>
              </InfoItem>
            </InfoCard>
          </InfoSection>
        </ContentGrid>

        <MapSection>
          <h2>Visit Us On Map</h2>
          <iframe
            width="100%"
            height="500"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6339.474000779027!2d72.84966865312768!3d19.130727057356765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b62b2069bae7%3A0x3cecc6f1fbbd723e!2sRathod%20Niwas%2C%20Saraswati%20Baug%2C%20Natwar%20Nagar%2C%20Jogeshwari%20East%2C%20Mumbai%2C%20Maharashtra%20400060!5e0!3m2!1sen!2sin!4v1762629561531!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="InfraByte IT System Location - Jogeshwari, Mumbai">
          </iframe>
        </MapSection>

      </Container>
    </ContactContainer>
  );
};

export default Contact;
