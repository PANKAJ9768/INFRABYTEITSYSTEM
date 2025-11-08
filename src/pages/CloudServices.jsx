import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin-top: 80px;
  background: #ffffff;
  color: #2c3e50;
  overflow-x: hidden;

  @media (max-width: 768px) {
    margin-top: 72px;
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%);
  padding: 120px 0;
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
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  h1 {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 1.4rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
    opacity: 0.95;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1280px) {
    padding: 80px 0;
    h1 { font-size: 3.2rem; }
    p { font-size: 1.2rem; }
  }

  @media (max-width: 768px) {
    padding: 60px 0;
    h1 { font-size: 2.2rem; }
    p { font-size: 1rem; }
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

const Section = styled.section`
  padding: 80px 0;
  border-bottom: 1px solid rgba(0,0,0,0.05);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  line-height: 1.3;

  @media (max-width: 1280px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  max-width: 900px;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
  gap: 2.5rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid #e0e0e0;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(47, 128, 237, 0.2);
    border-color: #29B6F6;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const CardContent = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 0.95rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;

  li {
    padding: 0.75rem 0 0.75rem 2.5rem;
    position: relative;
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #29B6F6;
      font-weight: bold;
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      padding: 0.5rem 0 0.5rem 2rem;
    }
  }
`;

const ProcessStep = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-bottom: 3rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.8rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
`;

const StepContent = styled.div`
  flex: 1;

  h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 0.75rem;
  }

  p {
    color: #666;
    line-height: 1.7;
    font-size: 0.95rem;
  }
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%);
  padding: 4rem;
  border-radius: 20px;
  color: white;
  text-align: center;
  margin-top: 4rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 2.5rem;

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: white;
  color: #29B6F6;
  padding: 14px 40px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 280px;
    padding: 12px 30px;
  }
`;

const RelatedServices = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const RelatedServiceCard = styled(Link)`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;

  h4 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 0.75rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.6;
  }

  &:hover {
    background: white;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
`;

const CloudServices = () => {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <h1>Cloud & DevOps Solutions</h1>
          <p>Transform your infrastructure with secure, scalable cloud migration and modern DevOps practices</p>
        </Container>
      </HeroSection>

      {/* Overview Section */}
      <Section>
        <Container>
          <SectionTitle>Complete Cloud Strategy</SectionTitle>
          <SectionDescription>
            We help organizations migrate to cloud environments, optimize cloud spend, and implement DevOps best practices.
            Our expertise spans AWS, Azure, Google Cloud Platform, and hybrid cloud architectures. We ensure seamless
            transitions with minimal downtime while maintaining security and compliance throughout the process.
          </SectionDescription>

          <Grid>
            <Card>
              <CardIcon>☁️</CardIcon>
              <CardTitle>Cloud Migration</CardTitle>
              <CardContent>
                Strategic planning and execution of cloud migrations with minimal disruption to your business operations.
              </CardContent>
              <FeatureList>
                <li>Infrastructure assessment and planning</li>
                <li>Data migration strategies</li>
                <li>Application re-hosting and re-platforming</li>
                <li>Cutover management</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>⚙️</CardIcon>
              <CardTitle>DevOps Implementation</CardTitle>
              <CardContent>
                Establish continuous integration and deployment pipelines for faster, reliable software delivery.
              </CardContent>
              <FeatureList>
                <li>CI/CD pipeline setup</li>
                <li>Infrastructure as Code (IaC)</li>
                <li>Container orchestration</li>
                <li>Automated testing frameworks</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🔒</CardIcon>
              <CardTitle>Cloud Security</CardTitle>
              <CardContent>
                Implement comprehensive security controls and compliance measures for your cloud infrastructure.
              </CardContent>
              <FeatureList>
                <li>Identity and access management</li>
                <li>Network security architecture</li>
                <li>Data encryption and protection</li>
                <li>Compliance and audit trails</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>💰</CardIcon>
              <CardTitle>Cloud Optimization</CardTitle>
              <CardContent>
                Reduce cloud costs and optimize resource utilization while maintaining performance and reliability.
              </CardContent>
              <FeatureList>
                <li>Cost analysis and optimization</li>
                <li>Resource right-sizing</li>
                <li>Reserved instance management</li>
                <li>Performance tuning</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Our Process Section */}
      <Section style={{ background: '#f8f9fa' }}>
        <Container>
          <SectionTitle>Our Implementation Process</SectionTitle>
          <SectionDescription>
            We follow a structured, proven methodology to ensure successful cloud transformation
          </SectionDescription>

          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepContent>
              <h4>Assessment & Planning</h4>
              <p>
                Conduct comprehensive analysis of your current infrastructure, applications, and business objectives.
                We develop a detailed migration strategy and roadmap tailored to your specific needs.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepContent>
              <h4>Design & Architecture</h4>
              <p>
                Design scalable, secure cloud architecture aligned with industry best practices. We select appropriate
                cloud services and deployment models (IaaS, PaaS, SaaS) for your workloads.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepContent>
              <h4>Migration Execution</h4>
              <p>
                Execute the migration in phases using proven methodologies. We manage data transfer, application
                deployment, testing, and validation with minimal business impact.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>4</StepNumber>
            <StepContent>
              <h4>Optimization & Support</h4>
              <p>
                Post-migration optimization, performance tuning, cost management, and ongoing support to maximize
                ROI and ensure continued success of your cloud environment.
              </p>
            </StepContent>
          </ProcessStep>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section>
        <Container>
          <SectionTitle>Key Benefits</SectionTitle>

          <Grid>
            <Card>
              <CardIcon>⚡</CardIcon>
              <CardTitle>Scalability & Flexibility</CardTitle>
              <CardContent>
                Scale resources up or down based on demand, ensuring optimal performance and cost efficiency at all times.
              </CardContent>
            </Card>

            <Card>
              <CardIcon>🛡️</CardIcon>
              <CardTitle>Enhanced Security</CardTitle>
              <CardContent>
                Leverage enterprise-grade security infrastructure with built-in compliance controls and disaster recovery capabilities.
              </CardContent>
            </Card>

            <Card>
              <CardIcon>💼</CardIcon>
              <CardTitle>Cost Efficiency</CardTitle>
              <CardContent>
                Reduce capital expenditure, pay only for what you use, and eliminate infrastructure maintenance costs.
              </CardContent>
            </Card>

            <Card>
              <CardIcon>🚀</CardIcon>
              <CardTitle>Faster Time-to-Market</CardTitle>
              <CardContent>
                Deploy applications quickly and efficiently, enabling your team to focus on innovation and business growth.
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Technology Stack Section */}
      <Section style={{ background: '#f8f9fa' }}>
        <Container>
          <SectionTitle>Technologies We Work With</SectionTitle>

          <Grid>
            <Card>
              <CardTitle>Cloud Platforms</CardTitle>
              <FeatureList>
                <li>Amazon Web Services (AWS)</li>
                <li>Microsoft Azure</li>
                <li>Google Cloud Platform</li>
                <li>Hybrid Cloud Solutions</li>
              </FeatureList>
            </Card>

            <Card>
              <CardTitle>DevOps Tools</CardTitle>
              <FeatureList>
                <li>Docker & Kubernetes</li>
                <li>CI/CD (Jenkins, GitLab, GitHub Actions)</li>
                <li>Infrastructure as Code (Terraform, CloudFormation)</li>
                <li>Monitoring & Logging (Prometheus, ELK Stack)</li>
              </FeatureList>
            </Card>

            <Card>
              <CardTitle>Security & Compliance</CardTitle>
              <FeatureList>
                <li>IAM Solutions</li>
                <li>Data Encryption</li>
                <li>Compliance Management (SOC2, ISO 27001)</li>
                <li>Disaster Recovery & Backup</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <CTASection>
            <h3>Ready to Transform Your Infrastructure?</h3>
            <p>
              Let our cloud experts help you design and implement a cloud strategy that drives business growth and
              operational excellence. Schedule a consultation today.
            </p>
            <CTAButton to="/contact">
              Schedule Consultation →
            </CTAButton>
          </CTASection>

          <div style={{ marginTop: '4rem' }}>
            <SectionTitle style={{ marginBottom: '2rem' }}>Explore Other Services</SectionTitle>
            <RelatedServices>
              <RelatedServiceCard to="/services/digital-transformation">
                <h4>Digital Transformation</h4>
                <p>Strategic consulting for complete business transformation and modernization</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/managed-services">
                <h4>Managed Services</h4>
                <p>24/7 monitoring and support for your entire IT infrastructure</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/cybersecurity">
                <h4>Cyber Security</h4>
                <p>Comprehensive security solutions to protect your cloud environment</p>
              </RelatedServiceCard>
            </RelatedServices>
          </div>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default CloudServices;
