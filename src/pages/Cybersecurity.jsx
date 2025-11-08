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
  background: linear-gradient(135deg, #EF5350 0%, #E53935 100%);
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
    background: linear-gradient(135deg, #EF5350 0%, #E53935 100%);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(239, 83, 80, 0.2);
    border-color: #E53935;
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
      color: #E53935;
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
  background: linear-gradient(135deg, #EF5350 0%, #E53935 100%);
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
  background: linear-gradient(135deg, #EF5350 0%, #E53935 100%);
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
  color: #E53935;
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

const Cybersecurity = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <h1>Cyber Security</h1>
          <p>Comprehensive security solutions to protect your organization from evolving cyber threats</p>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Advanced Threat Protection</SectionTitle>
          <SectionDescription>
            In today's threat landscape, cybersecurity isn't optional—it's essential. We provide comprehensive security
            solutions designed to detect, prevent, and respond to cyber threats. Our multi-layered approach protects your
            infrastructure, applications, data, and users from sophisticated attacks.
          </SectionDescription>

          <Grid>
            <Card>
              <CardIcon>🛡️</CardIcon>
              <CardTitle>Network Security</CardTitle>
              <CardContent>
                Protect your network from unauthorized access, malware, and intrusions with advanced security controls.
              </CardContent>
              <FeatureList>
                <li>Firewall management and configuration</li>
                <li>Intrusion detection and prevention</li>
                <li>DDoS protection</li>
                <li>Network segmentation</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🔐</CardIcon>
              <CardTitle>Endpoint Security</CardTitle>
              <CardContent>
                Secure all endpoints including computers, laptops, and mobile devices from malware and attacks.
              </CardContent>
              <FeatureList>
                <li>Endpoint detection and response (EDR)</li>
                <li>Antivirus and anti-malware</li>
                <li>Mobile device management</li>
                <li>Zero-trust endpoint security</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🔑</CardIcon>
              <CardTitle>Identity & Access</CardTitle>
              <CardContent>
                Implement strong authentication and access controls to prevent unauthorized access to sensitive data.
              </CardContent>
              <FeatureList>
                <li>Multi-factor authentication</li>
                <li>Identity and access management</li>
                <li>Privileged access management</li>
                <li>Single sign-on solutions</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🔍</CardIcon>
              <CardTitle>Threat Detection & Response</CardTitle>
              <CardContent>
                Detect threats early and respond quickly with 24/7 Security Operations Center (SOC) services.
              </CardContent>
              <FeatureList>
                <li>24/7 SOC monitoring</li>
                <li>Threat intelligence</li>
                <li>Incident response</li>
                <li>Forensics and investigation</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section style={{ background: '#f8f9fa' }}>
        <Container>
          <SectionTitle>Our Security Framework</SectionTitle>
          <SectionDescription>
            We follow industry best practices and frameworks to ensure comprehensive security
          </SectionDescription>

          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepContent>
              <h4>Security Assessment</h4>
              <p>
                Conduct comprehensive security assessments to identify vulnerabilities and risks across your
                infrastructure, applications, and processes.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepContent>
              <h4>Remediation Planning</h4>
              <p>
                Develop a prioritized remediation roadmap addressing identified risks and vulnerabilities. We align
                security improvements with business objectives.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepContent>
              <h4>Implementation</h4>
              <p>
                Implement security controls, tools, and processes to mitigate identified risks. We manage deployment
                and integration with minimal disruption.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>4</StepNumber>
            <StepContent>
              <h4>Monitoring & Optimization</h4>
              <p>
                Continuously monitor security posture, detect threats, and optimize controls. We provide regular
                reporting and recommendations for ongoing improvement.
              </p>
            </StepContent>
          </ProcessStep>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Compliance & Certifications</SectionTitle>

          <Grid>
            <Card>
              <CardIcon>✅</CardIcon>
              <CardTitle>Regulatory Compliance</CardTitle>
              <CardContent>
                Ensure compliance with industry regulations and standards to avoid penalties and reputational damage.
              </CardContent>
              <FeatureList>
                <li>GDPR compliance</li>
                <li>HIPAA compliance</li>
                <li>PCI DSS compliance</li>
                <li>SOC 2 Type II certification</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🏆</CardIcon>
              <CardTitle>Security Standards</CardTitle>
              <CardContent>
                Align your security program with industry-leading frameworks and best practices.
              </CardContent>
              <FeatureList>
                <li>ISO 27001 certification</li>
                <li>NIST Cybersecurity Framework</li>
                <li>CIS Controls</li>
                <li>OWASP standards</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>📊</CardIcon>
              <CardTitle>Security Audits</CardTitle>
              <CardContent>
                Conduct regular audits and assessments to validate security controls and compliance.
              </CardContent>
              <FeatureList>
                <li>Vulnerability assessments</li>
                <li>Penetration testing</li>
                <li>Code reviews</li>
                <li>Compliance audits</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <h3>Strengthen Your Security Posture Today</h3>
            <p>
              Don't wait for a breach to happen. Let our security experts help you identify and address vulnerabilities
              before they're exploited. Schedule a security assessment today.
            </p>
            <CTAButton to="/contact">
              Schedule Security Assessment →
            </CTAButton>
          </CTASection>

          <div style={{ marginTop: '4rem' }}>
            <SectionTitle style={{ marginBottom: '2rem' }}>Explore Other Services</SectionTitle>
            <RelatedServices>
              <RelatedServiceCard to="/services/cloud-services">
                <h4>Cloud & DevOps</h4>
                <p>Secure cloud infrastructure with enterprise-grade security controls</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/managed-services">
                <h4>Managed Services</h4>
                <p>24/7 monitoring and support for your entire IT infrastructure</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/data-center">
                <h4>Data Centre</h4>
                <p>Secure data centre solutions with comprehensive protection</p>
              </RelatedServiceCard>
            </RelatedServices>
          </div>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Cybersecurity;
