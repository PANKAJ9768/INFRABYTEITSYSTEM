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
  background: linear-gradient(135deg, #26C6DA 0%, #00BCD4 100%);
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
    background: linear-gradient(135deg, #26C6DA 0%, #00BCD4 100%);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(38, 198, 218, 0.2);
    border-color: #00BCD4;
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
      color: #00BCD4;
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
  background: linear-gradient(135deg, #26C6DA 0%, #00BCD4 100%);
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
  background: linear-gradient(135deg, #26C6DA 0%, #00BCD4 100%);
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
  color: #00BCD4;
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

const EndUserComputing = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <h1>End User Computing</h1>
          <p>Comprehensive device management and modern workplace solutions for your workforce</p>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Modern Workplace Solutions</SectionTitle>
          <SectionDescription>
            In today's hybrid work environment, managing diverse devices and user experiences is critical. Our End User
            Computing solutions provide comprehensive device management, mobile security, and workplace productivity tools.
            We ensure your workforce has secure, efficient access to the resources they need, whether in the office or
            remotely. From laptops and desktops to mobile devices, we provide unified management and support.
          </SectionDescription>

          <Grid>
            <Card>
              <CardIcon>💻</CardIcon>
              <CardTitle>Device Management</CardTitle>
              <CardContent>
                Centralized management of all endpoints including computers, laptops, and mobile devices.
              </CardContent>
              <FeatureList>
                <li>Mobile Device Management (MDM)</li>
                <li>Unified Endpoint Management (UEM)</li>
                <li>Device configuration and provisioning</li>
                <li>Software deployment and patching</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🖥️</CardIcon>
              <CardTitle>Virtual Desktop Infrastructure (VDI)</CardTitle>
              <CardContent>
                Flexible virtual desktop solutions for secure remote access and workforce mobility.
              </CardContent>
              <FeatureList>
                <li>Virtual desktop deployment</li>
                <li>Desktop virtualization architecture</li>
                <li>Performance optimization</li>
                <li>User session management</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🔒</CardIcon>
              <CardTitle>Mobile Device Security</CardTitle>
              <CardContent>
                Secure mobile devices and apps with comprehensive security controls and threat protection.
              </CardContent>
              <FeatureList>
                <li>Mobile app security</li>
                <li>Device encryption</li>
                <li>Mobile threat defense</li>
                <li>Secure container technology</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>👥</CardIcon>
              <CardTitle>User Support Services</CardTitle>
              <CardContent>
                Comprehensive technical support for end users including helpdesk and remote assistance.
              </CardContent>
              <FeatureList>
                <li>24/7 helpdesk support</li>
                <li>Remote assistance and troubleshooting</li>
                <li>User training and onboarding</li>
                <li>Ticket management and tracking</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section style={{ background: '#f8f9fa' }}>
        <Container>
          <SectionTitle>Implementation & Support</SectionTitle>
          <SectionDescription>
            We provide end-to-end implementation and ongoing support for end user computing solutions
          </SectionDescription>

          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepContent>
              <h4>Assessment & Planning</h4>
              <p>
                Evaluate your current user computing environment, identify requirements, and design an optimal
                solution for your organization.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepContent>
              <h4>Platform Selection & Setup</h4>
              <p>
                Select appropriate device management and virtualization platforms. We configure and optimize
                systems for your specific needs.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepContent>
              <h4>Rollout & Migration</h4>
              <p>
                Deploy solutions with minimal disruption to users. We provide training and support during the
                transition to new platforms and processes.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>4</StepNumber>
            <StepContent>
              <h4>Ongoing Management & Support</h4>
              <p>
                Continuous monitoring, support, and optimization of user computing infrastructure. We ensure
                high user satisfaction and productivity.
              </p>
            </StepContent>
          </ProcessStep>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Modern Workplace Benefits</SectionTitle>

          <Grid>
            <Card>
              <CardIcon>🌍</CardIcon>
              <CardTitle>Flexible Work Environment</CardTitle>
              <CardContent>
                Enable employees to work from anywhere with secure, seamless access to resources.
              </CardContent>
              <FeatureList>
                <li>Remote desktop access</li>
                <li>Cloud application access</li>
                <li>Secure VPN connectivity</li>
                <li>Mobile device support</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🛡️</CardIcon>
              <CardTitle>Enhanced Security</CardTitle>
              <CardContent>
                Protect corporate data and devices with comprehensive security controls.
              </CardContent>
              <FeatureList>
                <li>Endpoint protection</li>
                <li>Data encryption</li>
                <li>Access controls</li>
                <li>Compliance monitoring</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>⚡</CardIcon>
              <CardTitle>Improved Productivity</CardTitle>
              <CardContent>
                Streamline user provisioning and reduce IT overhead with automation.
              </CardContent>
              <FeatureList>
                <li>Automated provisioning</li>
                <li>Self-service capabilities</li>
                <li>Reduced IT tickets</li>
                <li>Faster issue resolution</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>💰</CardIcon>
              <CardTitle>Cost Optimization</CardTitle>
              <CardContent>
                Reduce total cost of ownership through efficient resource utilization.
              </CardContent>
              <FeatureList>
                <li>Hardware consolidation</li>
                <li>Software license optimization</li>
                <li>Reduced support costs</li>
                <li>Energy efficiency</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <h3>Enable Your Modern Workforce Today</h3>
            <p>
              Let our end user computing experts help you implement solutions that enhance productivity, security,
              and flexibility. Schedule a consultation to discuss your workplace requirements.
            </p>
            <CTAButton to="/contact">
              Get Started with EUC Solutions →
            </CTAButton>
          </CTASection>

          <div style={{ marginTop: '4rem' }}>
            <SectionTitle style={{ marginBottom: '2rem' }}>Explore Other Services</SectionTitle>
            <RelatedServices>
              <RelatedServiceCard to="/services/managed-services">
                <h4>Managed Services</h4>
                <p>24/7 monitoring and support for your devices and infrastructure</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/cybersecurity">
                <h4>Cyber Security</h4>
                <p>Comprehensive security solutions for device and data protection</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/cloud-services">
                <h4>Cloud & DevOps</h4>
                <p>Cloud infrastructure for modern workplace applications</p>
              </RelatedServiceCard>
            </RelatedServices>
          </div>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default EndUserComputing;
