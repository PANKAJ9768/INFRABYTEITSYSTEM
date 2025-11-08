import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  margin-top: 80px;
  padding: 80px 0;
  background: #f8f9fa;
  min-height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 100px 0;
  color: white;
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 1.3rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
    opacity: 0.95;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1280px) {
    padding: 80px 0;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 0;
    margin-bottom: 40px;

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const CategorySection = styled.section`
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const CategoryHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const CategoryTag = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  color: #667eea;
  padding: 10px 24px;
  border-radius: 24px;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid rgba(102, 126, 234, 0.2);

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 8px 20px;
  }
`;

const CategoryTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.3;

  @media (max-width: 1280px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const CategoryDescription = styled.p`
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  text-align: left;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
    border-color: rgba(102, 126, 234, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: ${props => props.color || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 1280px) {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.75rem;
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: ${props => props.color || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.75rem;
  font-size: 2rem;
  color: white;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.75rem;
  }
`;

const ServiceTitle = styled.h3`
  margin-bottom: 1.25rem;
  color: #2c3e50;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.4;

  @media (max-width: 1280px) {
    font-size: 1.35rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.75rem;
  font-size: 1rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;

  li {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
    padding-left: 1.75rem;
    position: relative;
    line-height: 1.6;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #667eea;
      font-weight: bold;
      font-size: 1.1rem;
      top: -2px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;

    li {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const ServiceLink = styled(Link)`
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 24px;
  border-radius: 8px;
  border: 2px solid #667eea;
  background: transparent;
  min-height: 44px;
  justify-content: center;

  &:hover {
    background: #667eea;
    color: white;
    transform: translateX(5px);
  }

  &:active {
    transform: translateX(3px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px 24px;
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

const Services = () => {
  const infrastructureApplicationServices = [
    {
      title: 'Cloud & DevOps',
      description: 'Complete cloud migration, DevOps implementation, and continuous integration/deployment solutions for modern infrastructure.',
      features: ['Cloud Migration & Strategy', 'DevOps Pipeline Setup', 'Container Orchestration', 'Infrastructure as Code'],
      link: '/services/cloud-services',
      icon: '☁️',
      color: 'linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%)'
    },
    {
      title: 'Digital Transformation',
      description: 'Strategic consulting and implementation for complete digital business transformation and operational excellence.',
      features: ['Process Automation', 'Business Intelligence', 'Legacy Modernization', 'Digital Workplace'],
      link: '/services/digital-transformation',
      icon: '🚀',
      color: 'linear-gradient(135deg, #AB47BC 0%, #8E24AA 100%)'
    },
    {
      title: 'Infrastructure Managed Services',
      description: '24/7 monitoring, maintenance, and proactive support for your complete IT infrastructure ecosystem.',
      features: ['Proactive Monitoring', 'Incident Management', 'Performance Optimization', 'Capacity Planning'],
      link: '/services/managed-services',
      icon: '⚙️',
      color: 'linear-gradient(135deg, #66BB6A 0%, #43A047 100%)'
    },
    {
      title: 'AI Automations',
      description: 'Intelligent automation solutions leveraging cutting-edge AI and machine learning technologies.',
      features: ['Process Automation with AI', 'Chatbot Development', 'Predictive Analytics', 'Machine Learning Models'],
      link: '/services/ai-automations',
      icon: '🤖',
      color: 'linear-gradient(135deg, #FF7043 0%, #FF5722 100%)'
    }
  ];

  const infrastructureSolutions = [
    {
      title: 'Cyber Security',
      description: 'Full-spectrum cybersecurity solutions to protect your business from evolving digital threats.',
      features: ['Threat Detection & Response', 'Security Audits', 'Compliance Management', '24/7 SOC Services'],
      link: '/services/cybersecurity',
      icon: '🔒',
      color: 'linear-gradient(135deg, #EF5350 0%, #E53935 100%)'
    },
    {
      title: 'Data Centre Solutions',
      description: 'Scalable, enterprise-grade infrastructure solutions including virtualization, storage, and backup systems.',
      features: ['Virtualization', 'Storage Solutions', 'Backup & Recovery', 'Network Infrastructure'],
      link: '/services/data-center',
      icon: '🏢',
      color: 'linear-gradient(135deg, #5C6BC0 0%, #3F51B5 100%)'
    },
    {
      title: 'End User Computing',
      description: 'Comprehensive device management, support services, and modern workplace solutions.',
      features: ['Device Management', 'VDI Solutions', 'Mobile Device Security', 'User Support Services'],
      link: '/services/end-user-computing',
      icon: '💻',
      color: 'linear-gradient(135deg, #26C6DA 0%, #00BCD4 100%)'
    },
    {
      title: 'Web & Domain Hosting',
      description: 'Reliable web hosting, domain management, and comprehensive website performance optimization.',
      features: ['Domain Registration', 'Web Hosting Services', 'SSL Certificates', 'Performance Optimization'],
      link: '/services/web-hosting',
      icon: '🌐',
      color: 'linear-gradient(135deg, #42A5F5 0%, #2196F3 100%)'
    }
  ];

  const softwareSolutions = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions built from the ground up to meet your specific business requirements.',
      features: ['Web Application Development', 'Mobile App Development', 'API Development', 'Database Design'],
      link: '/services/custom-software',
      icon: '💻',
      color: 'linear-gradient(135deg, #9C27B0 0%, #673AB7 100%)'
    },
    {
      title: 'Enterprise Software Solutions',
      description: 'Comprehensive enterprise software systems designed for large-scale business operations.',
      features: ['ERP Systems', 'CRM Solutions', 'Business Process Management', 'Enterprise Integration'],
      link: '/services/enterprise-software',
      icon: '🏭',
      color: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)'
    },
    {
      title: 'SaaS Solutions',
      description: 'Cloud-based software-as-a-service solutions for modern, scalable business applications.',
      features: ['Multi-tenant Architecture', 'Subscription Management', 'Cloud Deployment', 'Scalable Infrastructure'],
      link: '/services/saas-solutions',
      icon: '☁️',
      color: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)'
    },
    {
      title: 'Software Maintenance & Support',
      description: 'Ongoing maintenance, updates, and dedicated technical support for your software applications.',
      features: ['Bug Fixes & Updates', 'Performance Optimization', '24/7 Technical Support', 'Version Management'],
      link: '/services/software-support',
      icon: '🔧',
      color: 'linear-gradient(135deg, #607D8B 0%, #455A64 100%)'
    }
  ];

  return (
    <ServicesContainer>
      <HeroSection>
        <Container>
          <h1>Our Services</h1>
          <p>
            Comprehensive IT solutions designed to accelerate your digital transformation,
            optimize your technology infrastructure, and deliver custom software solutions.
          </p>
        </Container>
      </HeroSection>

      <Container>
        {/* IT Infrastructure & Application Services */}
        <CategorySection>
          <CategoryHeader>
            <CategoryTag>IT Infrastructure & Application Services</CategoryTag>
            <CategoryTitle>Infrastructure & Application Services</CategoryTitle>
            <CategoryDescription>
              Strategic technology services that drive digital transformation and operational excellence
            </CategoryDescription>
          </CategoryHeader>

          <ServicesGrid>
            {infrastructureApplicationServices.map((service, index) => (
              <ServiceCard key={index} color={service.color}>
                <ServiceIcon color={service.color}>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ServiceFeatures>
                <ServiceLink to={service.link}>
                  Learn More →
                </ServiceLink>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </CategorySection>

        {/* IT Infrastructure Solutions */}
        <CategorySection>
          <CategoryHeader>
            <CategoryTag>IT Infrastructure Solutions</CategoryTag>
            <CategoryTitle>Infrastructure Solutions</CategoryTitle>
            <CategoryDescription>
              Robust infrastructure solutions that secure, optimize, and modernize your technology foundation
            </CategoryDescription>
          </CategoryHeader>

          <ServicesGrid>
            {infrastructureSolutions.map((service, index) => (
              <ServiceCard key={index} color={service.color}>
                <ServiceIcon color={service.color}>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ServiceFeatures>
                <ServiceLink to={service.link}>
                  Learn More →
                </ServiceLink>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </CategorySection>

        {/* Software Solutions */}
        <CategorySection>
          <CategoryHeader>
            <CategoryTag>Software Solutions</CategoryTag>
            <CategoryTitle>Custom Software Solutions</CategoryTitle>
            <CategoryDescription>
              Tailored software development and enterprise solutions to power your business growth
            </CategoryDescription>
          </CategoryHeader>

          <ServicesGrid>
            {softwareSolutions.map((service, index) => (
              <ServiceCard key={index} color={service.color}>
                <ServiceIcon color={service.color}>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ServiceFeatures>
                <ServiceLink to={service.link}>
                  Learn More →
                </ServiceLink>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </CategorySection>
      </Container>
    </ServicesContainer>
  );
};

export default Services;
