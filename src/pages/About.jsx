import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutContainer = styled.div`
  margin-top: 80px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 100px 0;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }

  .hero-content {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContentSection = styled.section`
  padding: 80px 0;
  background: ${props => props.background || 'white'};

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StoryCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: left;

  h3 {
    color: #2c3e50;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    color: #666;
    line-height: 1.7;
    font-size: 1.05rem;
  }
`;

const ValueCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
  border-top: 4px solid ${props => props.color || '#667eea'};

  &:hover {
    transform: translateY(-10px);
  }

  .value-icon {
    width: 80px;
    height: 80px;
    background: ${props => props.color || '#667eea'};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
    color: white;
  }

  h3 {
    color: #2c3e50;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 4rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);

  .stat-number {
    font-size: 3rem;
    font-weight: 700;
    color: #667eea;
    margin-bottom: 0.5rem;
    display: block;
  }

  .stat-label {
    color: #666;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const TeamSection = styled.div`
  text-align: center;

  .team-intro {
    max-width: 600px;
    margin: 0 auto 3rem;
    font-size: 1.1rem;
    color: #666;
    line-height: 1.7;
  }
`;

const CtaSection = styled.section`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  padding: 80px 0;
  color: white;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.6;
    opacity: 0.9;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .btn-primary, .btn-secondary {
    padding: 15px 30px;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s ease;
  }

  .btn-primary {
    background: #667eea;
    color: white;
    border: 2px solid #667eea;

    &:hover {
      background: #5a6fd8;
      transform: translateY(-2px);
    }
  }

  .btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
      background: white;
      color: #2c3e50;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 0;

    h2 {
      font-size: 2rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const About = () => {
  const coreValues = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and methodologies to deliver solutions that keep our clients ahead of the curve.',
      icon: '🚀',
      color: '#667eea'
    },
    {
      title: 'Reliability',
      description: 'Our commitment to 99.9% uptime and 24/7 support ensures your business operations run smoothly without interruption.',
      icon: '🛡️',
      color: '#26C6DA'
    },
    {
      title: 'Excellence',
      description: 'We strive for perfection in every project, from initial consultation to final deployment and ongoing maintenance.',
      icon: '⭐',
      color: '#FF7043'
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships with our clients, becoming their trusted technology partner for sustainable growth.',
      icon: '🤝',
      color: '#66BB6A'
    }
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <div className="container">
          <div className="hero-content">
            <HeroTitle>Empowering Digital Transformation</HeroTitle>
            <HeroSubtitle>
              InfraByte IT System is your trusted partner for secure, scalable, and
              cost-effective enterprise IT. We enable organizations to accelerate digital
              outcomes through cloud, security, and automation—backed by 24/7 managed operations.
            </HeroSubtitle>
            <div style={{marginTop: '2rem'}}>
              <img
                src="/public/logo.png"
                alt="InfraByte IT System"
                style={{height: '60px', opacity: '0.9'}}
              />
            </div>
          </div>
        </div>
      </HeroSection>

      <ContentSection>
        <div className="container">
          <TwoColumnGrid>
            <StoryCard>
              <h3>Our Story</h3>
              <p>
                Founded with a vision to bridge the technology gap for businesses of all sizes,
                InfraByte IT System has grown from a small startup to a leading IT services
                provider in Mumbai. Our journey began with a simple belief: that every business
                deserves access to enterprise-grade technology solutions that drive growth and innovation.
              </p>
              <p style={{marginTop: '1rem'}}>
                Over the years, we've helped hundreds of organizations transform their IT infrastructure,
                secure their digital assets, and leverage cloud technologies to achieve unprecedented
                efficiency and scalability.
              </p>
            </StoryCard>
            <StoryCard>
              <h3>Our Mission</h3>
              <p>
                To democratize enterprise-grade IT solutions by making them accessible, affordable,
                and manageable for businesses across all industries. We believe that technology should
                be an enabler, not a barrier to success.
              </p>
              <p style={{marginTop: '1rem'}}>
                <strong>Our Vision:</strong> To be the most trusted IT solutions partner in India,
                known for our innovation, reliability, and unwavering commitment to client success.
              </p>
            </StoryCard>
          </TwoColumnGrid>
        </div>
      </ContentSection>

      <ContentSection background="#f8f9fa">
        <div className="container">
          <SectionTitle>Why Choose InfraByte?</SectionTitle>

       {/*    <StatsGrid>
            <StatCard>
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Clients</span>
            </StatCard>
            <StatCard>
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime Guarantee</span>
            </StatCard>
            <StatCard>
              <span className="stat-number">24/7</span>
              <span className="stat-label">Expert Support</span>
            </StatCard>
            <StatCard>
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </StatCard>
          </StatsGrid>
 */}
          <ThreeColumnGrid>
            <ValueCard color="#667eea">
              <div className="value-icon">💡</div>
              <h3>Expert Team</h3>
              <p>
                Our certified professionals bring decades of combined experience in
                cloud computing, cybersecurity, and enterprise IT management.
              </p>
            </ValueCard>
            <ValueCard color="#26C6DA">
              <div className="value-icon">⚡</div>
              <h3>Rapid Deployment</h3>
              <p>
                Quick implementation timelines without compromising quality.
                Get your solutions up and running faster than industry standards.
              </p>
            </ValueCard>
            <ValueCard color="#FF7043">
              <div className="value-icon">💰</div>
              <h3>Cost Effective</h3>
              <p>
                Transparent pricing with no hidden costs. We help you optimize
                IT spending while maximizing return on investment.
              </p>
            </ValueCard>
          </ThreeColumnGrid>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="container">
          <SectionTitle>Our Core Values</SectionTitle>
          <TwoColumnGrid>
            {coreValues.map((value, index) => (
              <ValueCard key={index} color={value.color}>
                <div className="value-icon" style={{background: value.color}}>
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </ValueCard>
            ))}
          </TwoColumnGrid>
        </div>
      </ContentSection>

      <ContentSection background="#f8f9fa">
        <div className="container">
          <SectionTitle>Our Expertise</SectionTitle>
          <TeamSection>
            <p className="team-intro">
              Our multidisciplinary team combines deep technical expertise with business acumen
              to deliver solutions that not only work flawlessly but also drive measurable business outcomes.
            </p>

            <ThreeColumnGrid>
              <StoryCard>
                <h3>🎯 Strategic Consulting</h3>
                <p>
                  We don't just implement technology; we align IT strategy with business objectives
                  to ensure every solution contributes to your growth and competitive advantage.
                </p>
              </StoryCard>
              <StoryCard>
                <h3>🔧 Technical Excellence</h3>
                <p>
                  Our engineers are certified in leading technologies including AWS, Microsoft Azure,
                  VMware, Cisco, and more, ensuring best-in-class implementations.
                </p>
              </StoryCard>
              <StoryCard>
                <h3>📞 Dedicated Support</h3>
                <p>
                  Round-the-clock support with guaranteed response times. Our support team
                  becomes an extension of your IT department, always ready to help.
                </p>
              </StoryCard>
            </ThreeColumnGrid>
          </TeamSection>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="container">
          <SectionTitle>Industries We Serve</SectionTitle>
          <TwoColumnGrid>
            <div>
              <h3 style={{color: '#2c3e50', marginBottom: '1.5rem'}}>Diverse Sector Expertise</h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                {[
                  'Healthcare & Life Sciences',
                  'Banking, Financial Services & Insurance (BFSI)',
                  'Pharmaceutical & Biotech',
                  'Information Technology & Services (ITeS)',
                  'Government & Public Sector Units (PSU)',
                  'Retail & E-commerce',
                  'Manufacturing & Industrial',
                  'Education & Research'
                ].map((industry, index) => (
                  <li key={index} style={{
                    padding: '0.75rem 0',
                    borderBottom: '1px solid #f0f0f0',
                    color: '#666',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{color: '#667eea', marginRight: '0.5rem'}}>✓</span>
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
            <StoryCard>
              <h3>Industry-Specific Solutions</h3>
              <p>
                We understand that each industry has unique challenges, compliance requirements,
                and operational needs. Our solutions are tailored to address sector-specific
                requirements while maintaining the flexibility to scale and evolve.
              </p>
              <p style={{marginTop: '1rem'}}>
                From HIPAA compliance in healthcare to regulatory requirements in BFSI,
                we ensure your technology infrastructure meets industry standards while
                driving operational efficiency.
              </p>
            </StoryCard>
          </TwoColumnGrid>
        </div>
      </ContentSection>

      <CtaSection>
        <div className="container">
          <h2>Ready to Transform Your IT Infrastructure?</h2>
          <p>
            Join hundreds of satisfied clients who trust InfraByte IT System
            for their technology needs. Let's discuss how we can help accelerate your digital journey.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">Get Started Today</Link>
            <Link to="/services" className="btn-secondary">Explore Our Services</Link>
          </div>
        </div>
      </CtaSection>
    </AboutContainer>
  );
};

export default About;
