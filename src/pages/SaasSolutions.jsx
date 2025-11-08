import React from 'react';
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
  background: linear-gradient(135deg, #4CAF50 0%, #388E3C 100%);
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
    background: linear-gradient(135deg, #4CAF50 0%, #388E3C 100%);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(76, 175, 80, 0.2);
    border-color: #388E3C;
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
      color: #388E3C;
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
  background: linear-gradient(135deg, #4CAF50 0%, #388E3C 100%);
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
  background: linear-gradient(135deg, #4CAF50 0%, #388E3C 100%);
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
  color: #388E3C;
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

const SaasSolutions = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <h1>SaaS Solutions</h1>
          <p>Cloud-based software-as-a-service solutions for modern, scalable business applications</p>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Software as a Service (SaaS)</SectionTitle>
          <SectionDescription>
            SaaS applications have revolutionized how businesses access and use software. Our SaaS solutions provide
            cloud-based applications accessible from anywhere, with automatic updates, no infrastructure management,
            and flexible pricing. We build scalable, multi-tenant SaaS applications that serve multiple customers while
            maintaining data isolation, security, and performance. Focus on your business while we handle the technology.
          </SectionDescription>

          <Grid>
            <Card>
              <CardIcon>☁️</CardIcon>
              <CardTitle>Multi-Tenant Architecture</CardTitle>
              <CardContent>
                Scalable SaaS architecture that serves multiple customers efficiently.
              </CardContent>
              <FeatureList>
                <li>Multi-tenant data isolation</li>
                <li>Tenant management</li>
                <li>Resource optimization</li>
                <li>Scalable infrastructure</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>💰</CardIcon>
              <CardTitle>Subscription Management</CardTitle>
              <CardContent>
                Complete subscription and billing management for your SaaS business.
              </CardContent>
              <FeatureList>
                <li>Flexible pricing models</li>
                <li>Automated billing</li>
                <li>Usage-based pricing</li>
                <li>Payment processing</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🌐</CardIcon>
              <CardTitle>Cloud Deployment</CardTitle>
              <CardContent>
                Deploy SaaS applications on reliable cloud infrastructure with high availability.
              </CardContent>
              <FeatureList>
                <li>Multi-region deployment</li>
                <li>Auto-scaling</li>
                <li>High availability</li>
                <li>Disaster recovery</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>⚡</CardIcon>
              <CardTitle>Performance & Security</CardTitle>
              <CardContent>
                Optimize performance and implement comprehensive security for your SaaS platform.
              </CardContent>
              <FeatureList>
                <li>Load balancing</li>
                <li>CDN integration</li>
                <li>Data encryption</li>
                <li>Compliance monitoring</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section style={{ background: '#f8f9fa' }}>
        <Container>
          <SectionTitle>SaaS Development & Launch</SectionTitle>
          <SectionDescription>
            We help you build and launch successful SaaS applications
          </SectionDescription>

          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepContent>
              <h4>Idea & Planning</h4>
              <p>
                Validate your SaaS idea and develop a comprehensive go-to-market strategy. We help you identify
                market opportunities and define your product roadmap.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepContent>
              <h4>Platform Development</h4>
              <p>
                Build your SaaS platform with scalable, secure architecture. We implement multi-tenant capabilities,
                subscription management, and advanced features.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepContent>
              <h4>Launch & Onboarding</h4>
              <p>
                Launch your SaaS application with customer onboarding, documentation, and training. We ensure a smooth
                go-live and customer success.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>4</StepNumber>
            <StepContent>
              <h4>Growth & Optimization</h4>
              <p>
                Continuously optimize your SaaS platform based on user feedback and analytics. We implement new features
                and improve user experience for growth.
              </p>
            </StepContent>
          </ProcessStep>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>SaaS Platform Benefits</SectionTitle>

          <Grid>
            <Card>
              <CardIcon>📈</CardIcon>
              <CardTitle>Scalability & Growth</CardTitle>
              <CardContent>
                Scale your SaaS business without infrastructure limitations or operational overhead.
              </CardContent>
              <FeatureList>
                <li>Auto-scaling infrastructure</li>
                <li>Global availability</li>
                <li>Performance optimization</li>
                <li>Cost efficiency at scale</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🔒</CardIcon>
              <CardTitle>Security & Compliance</CardTitle>
              <CardContent>
                Enterprise-grade security to protect customer data and maintain compliance.
              </CardContent>
              <FeatureList>
                <li>Data encryption</li>
                <li>Access controls</li>
                <li>Audit trails</li>
                <li>Compliance certifications</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>💰</CardIcon>
              <CardTitle>Recurring Revenue Model</CardTitle>
              <CardContent>
                Build a sustainable business with predictable, recurring revenue streams.
              </CardContent>
              <FeatureList>
                <li>Subscription billing</li>
                <li>Usage-based pricing</li>
                <li>Payment automation</li>
                <li>Revenue analytics</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>👥</CardIcon>
              <CardTitle>Customer Success</CardTitle>
              <CardContent>
                Support tools and analytics to maximize customer satisfaction and retention.
              </CardContent>
              <FeatureList>
                <li>Customer onboarding</li>
                <li>Usage analytics</li>
                <li>Support infrastructure</li>
                <li>Feature adoption tracking</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <h3>Build Your SaaS Application Today</h3>
            <p>
              Let our SaaS experts help you build and launch a successful cloud-based application. From architecture to
              launch, we've got you covered. Schedule a consultation now.
            </p>
            <CTAButton to="/contact">
              Start Your SaaS Journey →
            </CTAButton>
          </CTASection>

          <div style={{ marginTop: '4rem' }}>
            <SectionTitle style={{ marginBottom: '2rem' }}>Explore Other Services</SectionTitle>
            <RelatedServices>
              <RelatedServiceCard to="/services/custom-software">
                <h4>Custom Software</h4>
                <p>Tailored software development for your unique requirements</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/cloud-services">
                <h4>Cloud & DevOps</h4>
                <p>Scalable cloud infrastructure for your SaaS platform</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/managed-services">
                <h4>Managed Services</h4>
                <p>24/7 support for your SaaS operations and infrastructure</p>
              </RelatedServiceCard>
            </RelatedServices>
          </div>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default SaasSolutions;
