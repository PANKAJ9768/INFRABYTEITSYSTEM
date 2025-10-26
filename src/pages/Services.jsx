import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  margin-top: 80px;
  padding: 60px 0;
  background: #f8f9fa;
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

const CategorySection = styled.section`
  margin-bottom: 4rem;
`;

const CategoryHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const CategoryTag = styled.div`
  display: inline-block;
  background: #e9ecef;
  color: #666;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CategoryTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CategoryDescription = styled.p`
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  text-align: left;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.color || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.color || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: white;
`;

const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  color: #2c3e50;
  font-size: 1.3rem;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;

  li {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    position: relative;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #667eea;
      font-weight: bold;
    }
  }
`;

const ServiceLink = styled(Link)`
  color: #667eea;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;

  &:hover {
    color: #764ba2;
    text-decoration: underline;
  }
`;

const Services = () => {
  const infrastructureApplicationServices = [
    {
      title: 'Cloud & DevOps',
      description: 'Complete cloud migration, DevOps implementation, and continuous integration/deployment solutions.',
      features: ['Cloud Migration & Strategy', 'DevOps Pipeline Setup', 'Container Orchestration', 'Infrastructure as Code'],
      link: '/services/cloud-services',
      icon: '☁️',
      color: 'linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%)'
    },
    {
      title: 'Digital Transformation',
      description: 'Strategic consulting and implementation for complete digital business transformation.',
      features: ['Process Automation', 'Business Intelligence', 'Legacy Modernization', 'Digital Workplace'],
      link: '/services/digital-transformation',
      icon: '🚀',
      color: 'linear-gradient(135deg, #AB47BC 0%, #8E24AA 100%)'
    },
    {
      title: 'Infrastructure Managed Services',
      description: '24/7 monitoring, maintenance, and support for your complete IT infrastructure.',
      features: ['Proactive Monitoring', 'Incident Management', 'Performance Optimization', 'Capacity Planning'],
      link: '/services/managed-services',
      icon: '⚙️',
      color: 'linear-gradient(135deg, #66BB6A 0%, #43A047 100%)'
    },
    {
      title: 'AI Automations',
      description: 'Intelligent automation solutions leveraging AI and machine learning technologies.',
      features: ['Process Automation with AI', 'Chatbot Development', 'Predictive Analytics', 'Machine Learning Models'],
      link: '/services/ai-automations',
      icon: '🤖',
      color: 'linear-gradient(135deg, #FF7043 0%, #FF5722 100%)'
    }
  ];

  const infrastructureSolutions = [
    {
      title: 'Cyber Security',
      description: 'Full-spectrum cybersecurity solutions to protect your business from evolving threats.',
      features: ['Threat Detection & Response', 'Security Audits', 'Compliance Management', '24/7 SOC Services'],
      link: '/services/cybersecurity',
      icon: '🔒',
      color: 'linear-gradient(135deg, #EF5350 0%, #E53935 100%)'
    },
    {
      title: 'Data Centre Solutions',
      description: 'Scalable infrastructure solutions including virtualization, storage, and backup systems.',
      features: ['Virtualization', 'Storage Solutions', 'Backup & Recovery', 'Network Infrastructure'],
      link: '/services/data-center',
      icon: '🏢',
      color: 'linear-gradient(135deg, #5C6BC0 0%, #3F51B5 100%)'
    },
    {
      title: 'End User Computing',
      description: 'Device management, support services, and modern workplace solutions.',
      features: ['Device Management', 'VDI Solutions', 'Mobile Device Security', 'User Support Services'],
      link: '/services/end-user-computing',
      icon: '💻',
      color: 'linear-gradient(135deg, #26C6DA 0%, #00BCD4 100%)'
    },
    {
      title: 'Web & Domain Hosting',
      description: 'Reliable web hosting, domain management, and website performance optimization services.',
      features: ['Domain Registration', 'Web Hosting Services', 'SSL Certificates', 'Website Performance Optimization'],
      link: '/services/web-hosting',
      icon: '🌐',
      color: 'linear-gradient(135deg, #42A5F5 0%, #2196F3 100%)'
    }
  ];

  const softwareSolutions = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      features: ['Web Application Development', 'Mobile App Development', 'API Development', 'Database Design'],
      link: '/services/custom-software',
      icon: '💻',
      color: 'linear-gradient(135deg, #9C27B0 0%, #673AB7 100%)'
    },
    {
      title: 'Enterprise Software Solutions',
      description: 'Comprehensive enterprise software systems for large-scale business operations.',
      features: ['ERP Systems', 'CRM Solutions', 'Business Process Management', 'Enterprise Integration'],
      link: '/services/enterprise-software',
      icon: '🏭',
      color: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)'
    },
    {
      title: 'SaaS Solutions',
      description: 'Cloud-based software-as-a-service solutions for modern businesses.',
      features: ['Multi-tenant Architecture', 'Subscription Management', 'Cloud Deployment', 'Scalable Infrastructure'],
      link: '/services/saas-solutions',
      icon: '☁️',
      color: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)'
    },
    {
      title: 'Software Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support for your software applications.',
      features: ['Bug Fixes & Updates', 'Performance Optimization', '24/7 Technical Support', 'Version Management'],
      link: '/services/software-support',
      icon: '🔧',
      color: 'linear-gradient(135deg, #607D8B 0%, #455A64 100%)'
    }
  ];

  return (
    <>
      <HeroSection>
        <div className="container">
          <h1>Our Services</h1>
          <p style={{fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto 0'}}>
            Comprehensive IT solutions designed to accelerate your digital transformation,
            optimize your technology infrastructure, and deliver custom software solutions.
          </p>
        </div>
      </HeroSection>

      <ServicesContainer>
        <div className="container">
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
                  <ServiceLink to={service.link}>Learn More →</ServiceLink>
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
                  <ServiceLink to={service.link}>Learn More →</ServiceLink>
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
                  <ServiceLink to={service.link}>Learn More →</ServiceLink>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </CategorySection>
        </div>
      </ServicesContainer>
    </>
  );
};

export default Services;
