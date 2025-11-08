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
  background: linear-gradient(135deg, #607D8B 0%, #455A64 100%);
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
    background: linear-gradient(135deg, #607D8B 0%, #455A64 100%);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(96, 125, 139, 0.2);
    border-color: #455A64;
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
      color: #455A64;
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
  background: linear-gradient(135deg, #607D8B 0%, #455A64 100%);
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
  background: linear-gradient(135deg, #607D8B 0%, #455A64 100%);
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
  color: #455A64;
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

const SoftwareSupport = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <h1>Software Maintenance & Support</h1>
          <p>Ongoing maintenance, updates, and dedicated technical support for your software applications</p>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Comprehensive Software Support</SectionTitle>
          <SectionDescription>
            Software applications require ongoing maintenance and support to stay secure, performant, and compatible
            with evolving technology. Our software maintenance and support services ensure your applications run smoothly,
            remain secure, and meet evolving business requirements. We handle bug fixes, updates, performance optimization,
            and provide expert technical support when you need it.
          </SectionDescription>

          <Grid>
            <Card>
              <CardIcon>🔧</CardIcon>
              <CardTitle>Bug Fixes & Updates</CardTitle>
              <CardContent>
                Identify and fix bugs, apply patches, and release regular updates for stability.
              </CardContent>
              <FeatureList>
                <li>Bug identification and resolution</li>
                <li>Security patches</li>
                <li>Regular updates and releases</li>
                <li>Version management</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>⚡</CardIcon>
              <CardTitle>Performance Optimization</CardTitle>
              <CardContent>
                Optimize application performance and address performance issues.
              </CardContent>
              <FeatureList>
                <li>Performance analysis</li>
                <li>Code optimization</li>
                <li>Database tuning</li>
                <li>Infrastructure scaling</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>📞</CardIcon>
              <CardTitle>24/7 Technical Support</CardTitle>
              <CardContent>
                Expert technical support available round-the-clock for critical issues.
              </CardContent>
              <FeatureList>
                <li>24/7 helpdesk support</li>
                <li>Priority incident response</li>
                <li>Remote assistance</li>
                <li>Escalation procedures</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>📊</CardIcon>
              <CardTitle>Monitoring & Analytics</CardTitle>
              <CardContent>
                Continuous monitoring and analytics to track application health and usage.
              </CardContent>
              <FeatureList>
                <li>Application monitoring</li>
                <li>Performance metrics</li>
                <li>Usage analytics</li>
                <li>Alert management</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section style={{ background: '#f8f9fa' }}>
        <Container>
          <SectionTitle>Support & Maintenance Process</SectionTitle>
          <SectionDescription>
            We provide comprehensive support with defined service levels
          </SectionDescription>

          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepContent>
              <h4>Onboarding & Documentation</h4>
              <p>
                Understand your application, set up monitoring, and document known issues and procedures. We establish
                SLAs and support channels.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepContent>
              <h4>Proactive Monitoring</h4>
              <p>
                Continuously monitor your application for issues. We identify problems early and address them before
                they impact users.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepContent>
              <h4>Reactive Support</h4>
              <p>
                Respond quickly to issues and provide expert technical support. We troubleshoot problems, implement
                fixes, and restore normal operations.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>4</StepNumber>
            <StepContent>
              <h4>Continuous Improvement</h4>
              <p>
                Regular updates, patches, and optimizations. We suggest improvements based on usage patterns and
                technology trends.
              </p>
            </StepContent>
          </ProcessStep>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Support Packages & SLAs</SectionTitle>

          <Grid>
            <Card>
              <CardIcon>⭐</CardIcon>
              <CardTitle>Basic Support</CardTitle>
              <CardContent>
                Essential support for stable production applications.
              </CardContent>
              <FeatureList>
                <li>Business hours support</li>
                <li>Bug fixes and patches</li>
                <li>Monthly updates</li>
                <li>Basic monitoring</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>⭐⭐</CardIcon>
              <CardTitle>Standard Support</CardTitle>
              <CardContent>
                Comprehensive support with extended hours coverage.
              </CardContent>
              <FeatureList>
                <li>Extended hours support</li>
                <li>1-hour response time</li>
                <li>Weekly updates</li>
                <li>Performance monitoring</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>⭐⭐⭐</CardIcon>
              <CardTitle>Premium Support</CardTitle>
              <CardContent>
                24/7 premium support for mission-critical applications.
              </CardContent>
              <FeatureList>
                <li>24/7/365 support</li>
                <li>15-minute response time</li>
                <li>Continuous updates</li>
                <li>Advanced monitoring & analytics</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🎯</CardIcon>
              <CardTitle>Custom Support</CardTitle>
              <CardContent>
                Tailored support packages for unique requirements.
              </CardContent>
              <FeatureList>
                <li>Custom SLAs</li>
                <li>Dedicated resources</li>
                <li>Custom monitoring</li>
                <li>Strategic planning</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <h3>Get Professional Software Support Today</h3>
            <p>
              Don't let application issues disrupt your business. Get professional support and maintenance for your
              critical software applications. Contact us to discuss your support needs.
            </p>
            <CTAButton to="/contact">
              Discuss Support Options →
            </CTAButton>
          </CTASection>

          <div style={{ marginTop: '4rem' }}>
            <SectionTitle style={{ marginBottom: '2rem' }}>Explore Other Services</SectionTitle>
            <RelatedServices>
              <RelatedServiceCard to="/services/custom-software">
                <h4>Custom Software</h4>
                <p>Development of new custom applications for your business</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/saas-solutions">
                <h4>SaaS Solutions</h4>
                <p>Cloud-based software with built-in support and updates</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/managed-services">
                <h4>Managed Services</h4>
                <p>Comprehensive IT infrastructure support and management</p>
              </RelatedServiceCard>
            </RelatedServices>
          </div>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default SoftwareSupport;
