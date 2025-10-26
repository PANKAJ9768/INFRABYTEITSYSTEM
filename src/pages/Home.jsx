import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Styled Components
const HomeContainer = styled.div`
  margin-top: 72px;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }

  .floating-elements {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;

    .element {
      position: absolute;
      color: rgba(255,255,255,0.1);
      font-size: 2rem;
      animation: ${float} 3s ease-in-out infinite;

      &:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
      &:nth-child(2) { top: 20%; right: 15%; animation-delay: 1s; }
      &:nth-child(3) { bottom: 30%; left: 20%; animation-delay: 2s; }
      &:nth-child(4) { bottom: 15%; right: 10%; animation-delay: 0.5s; }
    }
  }

  @media (max-width: 768px) {
    min-height: 80vh;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  animation: ${fadeInUp} 1s ease-out;

  .hero-badge {
    display: inline-block;
    background: rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    margin-bottom: 2rem;
    font-size: 0.9rem;
    border: 1px solid rgba(255,255,255,0.3);
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 4px 8px rgba(0,0,0,0.3);

  .highlight {
    background: linear-gradient(45deg, #FFD700, #FFA500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.95;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  .btn-primary, .btn-secondary {
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .btn-primary {
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    color: white;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(255, 107, 107, 0.6);
    }
  }

  .btn-secondary {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    color: white;
    border: 2px solid rgba(255,255,255,0.3);

    &:hover {
      background: rgba(255,255,255,0.2);
      transform: translateY(-3px);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.section`
  padding: 100px 0;
  background: ${props => props.background || 'white'};
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #2c3e50;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 4rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
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
  padding: 2.5rem 1.5rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }

  .stat-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
  }

  .stat-number {
    font-size: 3.5rem;
    font-weight: 800;
    color: #667eea;
    margin-bottom: 0.5rem;
    display: block;
  }

  .stat-label {
    color: #666;
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: ${props => props.gradient || 'linear-gradient(45deg, #667eea, #764ba2)'};
  }

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  }

  .service-icon {
    width: 80px;
    height: 80px;
    background: ${props => props.gradient || 'linear-gradient(45deg, #667eea, #764ba2)'};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: white;
    animation: ${pulse} 2s ease-in-out infinite;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .service-link {
    color: #667eea;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: #5a6fd8;
      transform: translateX(5px);
    }
  }
`;

const TechStackSection = styled.div`
  text-align: center;
  margin: 4rem 0;

  .tech-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
  }

  .tech-category {
    background: white;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);

    h4 {
      color: #2c3e50;
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 3px solid #667eea;
    }
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
  }

  .tech-item {
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 12px;
    transition: all 0.3s ease;
    border: 2px solid transparent;

    &:hover {
      transform: scale(1.05);
      border-color: #667eea;
      background: white;
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
    }

    .tech-icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      display: block;
    }

    .tech-name {
      font-weight: 600;
      color: #2c3e50;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 768px) {
    .tech-categories {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .tech-grid {
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      gap: 0.75rem;
    }
  }
`;

const CallToAction = styled.section`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  padding: 80px 0;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></svg>') repeat;
    opacity: 0.5;
  }

  .cta-content {
    position: relative;
    z-index: 2;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto 2rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 60px 0;

    h2 {
      font-size: 2rem;
    }
  }
`;

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Your Digital Transformation Partner";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: 'Cloud & DevOps',
      description: 'Comprehensive cloud migration, DevOps implementation, and continuous integration solutions to modernize your infrastructure.',
      link: '/services/cloud-services',
      icon: '☁️',
      gradient: 'linear-gradient(45deg, #4FC3F7, #29B6F6)'
    },
    {
      title: 'Cyber Security',
      description: 'Advanced threat protection, compliance frameworks, and 24/7 security operations to safeguard your digital assets.',
      link: '/services/cybersecurity',
      icon: '🔒',
      gradient: 'linear-gradient(45deg, #EF5350, #E53935)'
    },
    {
      title: 'AI Automations',
      description: 'Intelligent process automation, machine learning models, and AI-driven solutions to transform your business operations.',
      link: '/services/ai-automations',
      icon: '🤖',
      gradient: 'linear-gradient(45deg, #FF7043, #FF5722)'
    },
    {
      title: 'Digital Transformation',
      description: 'Strategic consulting and implementation services to accelerate your digital journey and business modernization.',
      link: '/services/digital-transformation',
      icon: '🚀',
      gradient: 'linear-gradient(45deg, #AB47BC, #8E24AA)'
    },
    {
      title: 'Data Centre Solutions',
      description: 'Scalable infrastructure, virtualization, and enterprise-grade storage solutions for modern data centers.',
      link: '/services/data-center',
      icon: '🏢',
      gradient: 'linear-gradient(45deg, #5C6BC0, #3F51B5)'
    },
    {
      title: 'Custom Software',
      description: 'Tailored software development, mobile applications, and enterprise solutions built for your specific needs.',
      link: '/services/custom-software',
      icon: '💻',
      gradient: 'linear-gradient(45deg, #9C27B0, #673AB7)'
    }
  ];
const techStack = [
  // Cloud Platforms
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'Azure', icon: '🌐', category: 'Cloud' },
  { name: 'Google Cloud', icon: '☁️', category: 'Cloud' },
  { name: 'DigitalOcean', icon: '🌊', category: 'Cloud' },

  // Container & Orchestration
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'Kubernetes', icon: '⚙️', category: 'DevOps' },
  { name: 'OpenShift', icon: '🔧', category: 'DevOps' },
  { name: 'Jenkins', icon: '🔄', category: 'DevOps' },

  // Programming Languages
  { name: 'Python', icon: '🐍', category: 'Languages' },
  { name: 'Java', icon: '☕', category: 'Languages' },
  { name: 'JavaScript', icon: '📜', category: 'Languages' },
  { name: 'TypeScript', icon: '📝', category: 'Languages' },
  { name: 'C#', icon: '⚡', category: 'Languages' },
  { name: 'Go', icon: '🚀', category: 'Languages' },

  // Frontend Technologies
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Angular', icon: '🔺', category: 'Frontend' },
  { name: 'Vue.js', icon: '💚', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', category: 'Frontend' },

  // Backend & Frameworks
  { name: 'Node.js', icon: '💚', category: 'Backend' },
  { name: 'Spring Boot', icon: '🍃', category: 'Backend' },
  { name: 'Django', icon: '🎯', category: 'Backend' },
  { name: '.NET Core', icon: '🔵', category: 'Backend' },

  // Databases
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
  { name: 'MySQL', icon: '🗄️', category: 'Database' },
  { name: 'Redis', icon: '🔴', category: 'Database' },
  { name: 'Oracle', icon: '🔶', category: 'Database' },
  { name: 'Elasticsearch', icon: '🔍', category: 'Database' },

  // AI/ML & Analytics
  { name: 'TensorFlow', icon: '🤖', category: 'AI/ML' },
  { name: 'PyTorch', icon: '🔥', category: 'AI/ML' },
  { name: 'OpenAI', icon: '🧠', category: 'AI/ML' },
  { name: 'Apache Spark', icon: '⚡', category: 'Analytics' },

  // Security & Monitoring
  { name: 'Fortinet', icon: '🔒', category: 'Security' },
  { name: 'Palo Alto', icon: '🛡️', category: 'Security' },
  { name: 'Splunk', icon: '📊', category: 'Monitoring' },
  { name: 'Grafana', icon: '📈', category: 'Monitoring' },

  // Infrastructure
  { name: 'Terraform', icon: '🏗️', category: 'Infrastructure' },
  { name: 'Ansible', icon: '🔧', category: 'Infrastructure' },
  { name: 'VMware', icon: '💿', category: 'Virtualization' },
  { name: 'Hyper-V', icon: '🖥️', category: 'Virtualization' }
];


  return (
    <HomeContainer>
      <HeroSection>
        <div className="floating-elements">
          <div className="element">🚀</div>
          <div className="element">⚡</div>
          <div className="element">💡</div>
          <div className="element">🔧</div>
        </div>

        <div className="container">
          <HeroContent>
            <div className="hero-badge">
              🏆 Trusted by 500+ Companies Worldwide
            </div>
            <HeroTitle>
              Empowering Businesses with <span className="highlight">Next-Gen</span> IT Solutions
            </HeroTitle>
            <HeroSubtitle>
              {typedText}
              <br />
              Transform your business with cutting-edge cloud solutions, robust cybersecurity,
              and AI-powered automation. Experience the future of enterprise technology today.
            </HeroSubtitle>
            <HeroButtons>
              <Link to="/contact" className="btn-primary">
                🚀 Start Your Journey
              </Link>
              <Link to="/services" className="btn-secondary">
                📋 Explore Services
              </Link>
            </HeroButtons>
          </HeroContent>
        </div>
      </HeroSection>

    {/*   <Section background="#f8f9fa">
        <div className="container">
          <SectionTitle>Proven Excellence</SectionTitle>
          <SectionSubtitle>
            Numbers that speak for our commitment to delivering exceptional IT solutions
          </SectionSubtitle>

          <StatsGrid>
            <StatCard>
              <span className="stat-icon">🏢</span>
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Clients</span>
            </StatCard>
            <StatCard>
              <span className="stat-icon">⚡</span>
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime Guarantee</span>
            </StatCard>
            <StatCard>
              <span className="stat-icon">🛡️</span>
              <span className="stat-number">24/7</span>
              <span className="stat-label">Expert Support</span>
            </StatCard>
            <StatCard>
              <span className="stat-icon">🏆</span>
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </StatCard>
          </StatsGrid>
        </div>
      </Section>
 */}
      <Section>
        <div className="container">
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>
            Comprehensive IT solutions designed to accelerate your digital transformation
          </SectionSubtitle>

          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index} gradient={service.gradient}>
                <div className="service-icon" style={{background: service.gradient}}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More →
                </Link>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </div>
      </Section>

     <Section background="linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)">
       <div className="container">
         <SectionTitle>Technologies We Master</SectionTitle>
         <SectionSubtitle>
           Leveraging cutting-edge technologies across the full stack to build robust, scalable solutions
         </SectionSubtitle>

         <TechStackSection>
           <div className="tech-categories">
             <div className="tech-category">
               <h4>☁️ Cloud Platforms</h4>
               <div className="tech-grid">
                 {techStack.filter(tech => tech.category === 'Cloud').map((tech, index) => (
                   <div key={index} className="tech-item">
                     <span className="tech-icon">{tech.icon}</span>
                     <div className="tech-name">{tech.name}</div>
                   </div>
                 ))}
               </div>
             </div>

             <div className="tech-category">
               <h4>🔧 DevOps & Infrastructure</h4>
               <div className="tech-grid">
                 {techStack.filter(tech => ['DevOps', 'Infrastructure', 'Virtualization'].includes(tech.category)).map((tech, index) => (
                   <div key={index} className="tech-item">
                     <span className="tech-icon">{tech.icon}</span>
                     <div className="tech-name">{tech.name}</div>
                   </div>
                 ))}
               </div>
             </div>

             <div className="tech-category">
               <h4>💻 Development</h4>
               <div className="tech-grid">
                 {techStack.filter(tech => ['Languages', 'Frontend', 'Backend'].includes(tech.category)).map((tech, index) => (
                   <div key={index} className="tech-item">
                     <span className="tech-icon">{tech.icon}</span>
                     <div className="tech-name">{tech.name}</div>
                   </div>
                 ))}
               </div>
             </div>

             <div className="tech-category">
               <h4>🗄️ Data & Analytics</h4>
               <div className="tech-grid">
                 {techStack.filter(tech => ['Database', 'Analytics', 'AI/ML'].includes(tech.category)).map((tech, index) => (
                   <div key={index} className="tech-item">
                     <span className="tech-icon">{tech.icon}</span>
                     <div className="tech-name">{tech.name}</div>
                   </div>
                 ))}
               </div>
             </div>

             <div className="tech-category">
               <h4>🔒 Security & Monitoring</h4>
               <div className="tech-grid">
                 {techStack.filter(tech => ['Security', 'Monitoring'].includes(tech.category)).map((tech, index) => (
                   <div key={index} className="tech-item">
                     <span className="tech-icon">{tech.icon}</span>
                     <div className="tech-name">{tech.name}</div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </TechStackSection>
       </div>
     </Section>


      <CallToAction>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Join hundreds of forward-thinking companies who trust InfraByte IT Solutions
              for their technology needs. Let's build the future together.
            </p>
            <HeroButtons>
              <Link to="/contact" className="btn-primary">
                💬 Get Free Consultation
              </Link>
              <Link to="/about" className="btn-secondary">
                📖 Learn About Us
              </Link>
            </HeroButtons>
          </div>
        </div>
      </CallToAction>
    </HomeContainer>
  );
};

export default Home;
