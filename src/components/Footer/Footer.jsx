import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 3rem 0 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FooterSection = styled.div`
  h4 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  p, li {
    color: #bdc3c7;
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

const FooterLink = styled(Link)`
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const ContactInfo = styled.div`
  strong {
    color: white;
    display: block;
    margin-bottom: 0.5rem;
  }

  .address-block {
    background: rgba(255,255,255,0.05);
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    border-left: 3px solid #667eea;
  }

  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    .icon {
      margin-right: 0.5rem;
      min-width: 20px;
    }
  }
`;

const SocialMediaSection = styled.div`
  .find-us-title {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;

    .globe-icon {
      margin-right: 0.5rem;
      font-size: 1.2rem;
    }
  }

  .get-in-touch {
    color: #bdc3c7;
    margin-bottom: 1rem;
    font-style: italic;
  }

  .contact-quick {
    background: rgba(255,255,255,0.05);
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    border-left: 3px solid #667eea;

    .contact-line {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      color: #bdc3c7;
      font-size: 0.9rem;

      &:last-child {
        margin-bottom: 0;
      }

      .contact-icon {
        margin-right: 0.5rem;
        font-size: 1rem;
      }

      a {
        color: #bdc3c7;
        text-decoration: none;

        &:hover {
          color: white;
        }
      }
    }
  }

  .social-links {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
    color: #bdc3c7;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.1rem;
    font-weight: 600;

    &:hover {
      color: white;
      transform: translateY(-2px);
    }

    &.linkedin:hover { background: #0077b5; }
    &.instagram:hover { background: #e4405f; }
    &.facebook:hover { background: #1877f2; }
    &.twitter:hover { background: #1da1f2; }
  }

  .social-title {
    color: white;
    font-weight: 600;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #34495e;
  color: #95a5a6;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <h4>InfraByte IT System</h4>
            <p>Leading IT solutions provider delivering comprehensive technology services, software solutions, and digital transformation expertise.</p>
            <div style={{marginTop: '1rem'}}>
              <img
                src="/logo.png"
                alt="InfraByte IT System"
                style={{height: '40px', opacity: '0.8'}}
              />
            </div>
          </FooterSection>

          <FooterSection>
            <h4>Our Services</h4>
            <ul>
              <li><FooterLink to="/services/cloud-services">Cloud & DevOps</FooterLink></li>
              <li><FooterLink to="/services/cybersecurity">Cyber Security</FooterLink></li>
              <li><FooterLink to="/services/digital-transformation">Digital Transformation</FooterLink></li>
              <li><FooterLink to="/services/ai-automations">AI Automations</FooterLink></li>
              <li><FooterLink to="/services/web-hosting">Web & Domain Hosting</FooterLink></li>
              <li><FooterLink to="/services/custom-software">Custom Software</FooterLink></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>Quick Links</h4>
            <ul>
              <li><FooterLink to="/about">About Us</FooterLink></li>
              <li><FooterLink to="/services">All Services</FooterLink></li>
              <li><FooterLink to="/industries">Industries</FooterLink></li>
              <li><FooterLink to="/contact">Contact Us</FooterLink></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <ContactInfo>
              <h4>Contact Information</h4>
              <div className="address-block">
                <strong>Registered Office:</strong>
                <p>4, Laxman Sawant Chawl, Jai Bhavani Mata Road, Amboli, Andheri (W), Mumbai, Maharashtra - 400 058</p>
              </div>

              <div className="address-block">
                <strong>Communication Address:</strong>
                <p>303, 3rd Floor, Rathod Niwas, Natwar Nagar, Jogeshwari East, Mumbai - 400060</p>
              </div>

              {/* <div className="contact-item">
                <span className="icon">📞</span>
                <span>+91 82992 34751</span>
              </div>

              <div className="contact-item">
                <span className="icon">✉️</span>
                <a href="mailto:contactus@infrabyteitsystem.com" style={{color: '#bdc3c7', textDecoration: 'none'}}>
                  contactus@infrabyteitsystem.com
                </a>
              </div> */}
            </ContactInfo>
          </FooterSection>

          <FooterSection>
            <SocialMediaSection>
              <div className="find-us-title">
                <span className="globe-icon">🌐</span>
                Find Us
              </div>
              <div className="get-in-touch">Get in touch</div>

              <div className="contact-quick">
                <div className="contact-line">
                  <span className="contact-icon">📞</span>
                  <span>+91 82992 34751</span>
                </div>
                <div className="contact-line">
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:contactus@infrabyteitsystem.com">
                    contactus@infrabyteitsystem.com
                  </a>
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
            </SocialMediaSection>
          </FooterSection>
        </FooterContent>

        <Copyright>
          <p>© {new Date().getFullYear()} InfraByte IT System. All rights reserved. | Empowering businesses through technology.</p>
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;
