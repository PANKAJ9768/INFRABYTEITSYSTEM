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
  background: linear-gradient(135deg, #66BB6A 0%, #43A047 100%);
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
    background: linear-gradient(135deg, #66BB6A 0%, #43A047 100%);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(102, 187, 106, 0.2);
    border-color: #43A047;
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
      color: #43A047;
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
  background: linear-gradient(135deg, #66BB6A 0%, #43A047 100%);
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
  background: linear-gradient(135deg, #66BB6A 0%, #43A047 100%);
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
  color: #43A047;
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

const ManagedServices = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <h1>Managed IT Services</h1>
          <p>24/7 monitoring, maintenance, and proactive support for your entire IT infrastructure</p>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Comprehensive IT Management</SectionTitle>
          <SectionDescription>
            Managing IT infrastructure can be complex and resource-intensive. Our Managed IT Services provide 24/7
            monitoring, proactive maintenance, and expert support to keep your systems running smoothly. We handle the
            day-to-day operations while you focus on your core business. With predictable costs and improved uptime,
            you get peace of mind and better IT performance.
          </SectionDescription>

          <Grid>
            <Card>
              <CardIcon>📊</CardIcon>
              <CardTitle>24/7 Monitoring & Support</CardTitle>
              <CardContent>
                Round-the-clock monitoring of your infrastructure with rapid incident response and resolution.
              </CardContent>
              <FeatureList>
                <li>Real-time system monitoring</li>
                <li>Rapid incident response (15-minute SLA)</li>
                <li>Proactive issue detection</li>
                <li>Expert technical support</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🔧</CardIcon>
              <CardTitle>Preventive Maintenance</CardTitle>
              <CardContent>
                Scheduled maintenance and updates to prevent issues before they impact your business.
              </CardContent>
              <FeatureList>
                <li>Regular system updates and patches</li>
                <li>Hardware maintenance and replacement</li>
                <li>Software license management</li>
                <li>Performance optimization</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>📈</CardIcon>
              <CardTitle>Performance Optimization</CardTitle>
              <CardContent>
                Optimize your infrastructure for peak performance and efficient resource utilization.
              </CardContent>
              <FeatureList>
                <li>System performance analysis</li>
                <li>Capacity planning and forecasting</li>
                <li>Resource optimization</li>
                <li>Performance reporting and insights</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>📋</CardIcon>
              <CardTitle>Asset & Change Management</CardTitle>
              <CardContent>
                Track IT assets and manage changes with documented procedures and audit trails.
              </CardContent>
              <FeatureList>
                <li>IT asset inventory and tracking</li>
                <li>Change management procedures</li>
                <li>Configuration management</li>
                <li>Compliance documentation</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section style={{ background: '#f8f9fa' }}>
        <Container>
          <SectionTitle>Our Service Delivery Model</SectionTitle>
          <SectionDescription>
            We follow a structured approach to ensure consistent, reliable IT service delivery
          </SectionDescription>

          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepContent>
              <h4>Assessment & Baseline</h4>
              <p>
                We conduct a comprehensive assessment of your current IT infrastructure, identify gaps, and establish
                a baseline for monitoring and performance metrics.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepContent>
              <h4>Monitoring Setup</h4>
              <p>
                Deploy monitoring tools and establish SLAs (Service Level Agreements). We configure automated alerts
                for critical issues and performance degradation.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepContent>
              <h4>Ongoing Management</h4>
              <p>
                Provide continuous monitoring, maintenance, and support. Our team proactively identifies and resolves
                issues before they impact your business.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>4</StepNumber>
            <StepContent>
              <h4>Reporting & Optimization</h4>
              <p>
                Regular reporting on system performance, uptime, and security. We continuously optimize your
                infrastructure based on usage patterns and business growth.
              </p>
            </StepContent>
          </ProcessStep>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Service Level Agreements (SLAs)</SectionTitle>

          <Grid>
            <Card>
              <CardIcon>⚡</CardIcon>
              <CardTitle>Response Time</CardTitle>
              <CardContent>
                Guaranteed response times based on issue severity to minimize business impact.
              </CardContent>
              <FeatureList>
                <li>Critical Issues: 15 minutes</li>
                <li>High Priority: 1 hour</li>
                <li>Medium Priority: 4 hours</li>
                <li>Low Priority: 24 hours</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>⏱️</CardIcon>
              <CardTitle>Uptime Guarantee</CardTitle>
              <CardContent>
                Industry-leading uptime commitments with financial penalties for non-compliance.
              </CardContent>
              <FeatureList>
                <li>99.9% uptime guarantee</li>
                <li>Redundant systems and failover</li>
                <li>Disaster recovery procedures</li>
                <li>Business continuity planning</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>📞</CardIcon>
              <CardTitle>Support Channels</CardTitle>
              <CardContent>
                Multiple support channels for your convenience and immediate assistance.
              </CardContent>
              <FeatureList>
                <li>24/7 phone support</li>
                <li>Email ticketing system</li>
                <li>Portal for self-service</li>
                <li>Dedicated account manager</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <h3>Simplify Your IT Operations Today</h3>
            <p>
              Stop worrying about IT management. Let our team handle the monitoring, maintenance, and support while
              you focus on growing your business. Learn more about our flexible managed services plans.
            </p>
            <CTAButton to="/contact">
              Get Started with Managed Services →
            </CTAButton>
          </CTASection>

          <div style={{ marginTop: '4rem' }}>
            <SectionTitle style={{ marginBottom: '2rem' }}>Explore Other Services</SectionTitle>
            <RelatedServices>
              <RelatedServiceCard to="/services/cloud-services">
                <h4>Cloud & DevOps</h4>
                <p>Managed cloud infrastructure with 24/7 monitoring and support</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/cybersecurity">
                <h4>Cyber Security</h4>
                <p>Comprehensive security monitoring and threat detection</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/data-center">
                <h4>Data Centre</h4>
                <p>Managed data centre infrastructure with enterprise-grade support</p>
              </RelatedServiceCard>
            </RelatedServices>
          </div>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default ManagedServices;
