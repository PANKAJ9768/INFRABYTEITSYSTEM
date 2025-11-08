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
  background: linear-gradient(135deg, #5C6BC0 0%, #3F51B5 100%);
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
    background: linear-gradient(135deg, #5C6BC0 0%, #3F51B5 100%);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(63, 81, 181, 0.2);
    border-color: #3F51B5;
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
      color: #3F51B5;
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
  background: linear-gradient(135deg, #5C6BC0 0%, #3F51B5 100%);
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
  background: linear-gradient(135deg, #5C6BC0 0%, #3F51B5 100%);
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
  color: #3F51B5;
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

const DataCenter = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <h1>Data Centre Solutions</h1>
          <p>Scalable, enterprise-grade infrastructure for your mission-critical applications</p>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Enterprise-Grade Data Centre Infrastructure</SectionTitle>
          <SectionDescription>
            Our data centre solutions provide the reliable, secure infrastructure your business needs to support
            growth. From virtualization and storage to backup and disaster recovery, we deliver comprehensive solutions
            designed for high availability and performance. With redundancy at every level, your applications stay online.
          </SectionDescription>

          <Grid>
            <Card>
              <CardIcon>⚙️</CardIcon>
              <CardTitle>Virtualization Services</CardTitle>
              <CardContent>
                Maximize hardware utilization and reduce costs with advanced virtualization technology.
              </CardContent>
              <FeatureList>
                <li>Server virtualization (VMware, Hyper-V)</li>
                <li>Virtual machine management</li>
                <li>Resource allocation optimization</li>
                <li>Live migration capabilities</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>💾</CardIcon>
              <CardTitle>Storage Solutions</CardTitle>
              <CardContent>
                High-performance, reliable storage infrastructure with advanced data protection features.
              </CardContent>
              <FeatureList>
                <li>SAN and NAS systems</li>
                <li>RAID configurations</li>
                <li>Storage tiering</li>
                <li>Data deduplication and compression</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🔄</CardIcon>
              <CardTitle>Backup & Disaster Recovery</CardTitle>
              <CardContent>
                Comprehensive backup and recovery solutions to protect your critical data and applications.
              </CardContent>
              <FeatureList>
                <li>Automated backup systems</li>
                <li>Disaster recovery planning</li>
                <li>Backup replication</li>
                <li>Recovery time objective (RTO) optimization</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🌐</CardIcon>
              <CardTitle>Network Infrastructure</CardTitle>
              <CardContent>
                Robust network architecture for reliable, high-speed data centre connectivity.
              </CardContent>
              <FeatureList>
                <li>Network design and architecture</li>
                <li>Load balancing</li>
                <li>Redundant connectivity</li>
                <li>Network security integration</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section style={{ background: '#f8f9fa' }}>
        <Container>
          <SectionTitle>Data Centre Architecture & Design</SectionTitle>
          <SectionDescription>
            We design data centres with redundancy, scalability, and performance in mind
          </SectionDescription>

          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepContent>
              <h4>Infrastructure Assessment</h4>
              <p>
                Evaluate your current infrastructure, capacity requirements, and growth projections. We identify
                optimization opportunities and plan for future scalability.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepContent>
              <h4>Design & Planning</h4>
              <p>
                Design a comprehensive data centre architecture that meets your performance, availability, and budget
                requirements. We ensure industry best practices for reliability.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepContent>
              <h4>Implementation</h4>
              <p>
                Deploy infrastructure components with minimal downtime. We manage hardware installation, software
                configuration, and integration with your existing systems.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>4</StepNumber>
            <StepContent>
              <h4>Optimization & Management</h4>
              <p>
                Continuously monitor and optimize your data centre infrastructure. We manage capacity, performance,
                and cost efficiency on an ongoing basis.
              </p>
            </StepContent>
          </ProcessStep>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Data Centre Features & Benefits</SectionTitle>

          <Grid>
            <Card>
              <CardIcon>🛡️</CardIcon>
              <CardTitle>High Availability (99.99%)</CardTitle>
              <CardContent>
                Redundant systems ensure your applications stay online when you need them most.
              </CardContent>
              <FeatureList>
                <li>Redundant power supplies</li>
                <li>Multiple network connections</li>
                <li>Failover systems</li>
                <li>SLA guarantees</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🔒</CardIcon>
              <CardTitle>Security & Compliance</CardTitle>
              <CardContent>
                Enterprise-grade security with compliance certifications and audit trails.
              </CardContent>
              <FeatureList>
                <li>Physical security controls</li>
                <li>Access management</li>
                <li>Compliance monitoring</li>
                <li>Security certifications</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>⚡</CardIcon>
              <CardTitle>Performance & Scalability</CardTitle>
              <CardContent>
                Scalable infrastructure that grows with your business without compromising performance.
              </CardContent>
              <FeatureList>
                <li>High-speed networking</li>
                <li>Low-latency storage</li>
                <li>Vertical & horizontal scaling</li>
                <li>Resource flexibility</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>💰</CardIcon>
              <CardTitle>Cost Optimization</CardTitle>
              <CardContent>
                Efficient infrastructure design reduces operational and capital costs.
              </CardContent>
              <FeatureList>
                <li>Energy efficiency</li>
                <li>Resource consolidation</li>
                <li>Capacity planning</li>
                <li>Cost tracking and optimization</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <h3>Build Your Ideal Data Centre Infrastructure</h3>
            <p>
              Let our infrastructure experts design and deploy a data centre solution that supports your business growth
              and application requirements. Schedule a consultation today.
            </p>
            <CTAButton to="/contact">
              Schedule Data Centre Consultation →
            </CTAButton>
          </CTASection>

          <div style={{ marginTop: '4rem' }}>
            <SectionTitle style={{ marginBottom: '2rem' }}>Explore Other Services</SectionTitle>
            <RelatedServices>
              <RelatedServiceCard to="/services/cloud-services">
                <h4>Cloud & DevOps</h4>
                <p>Cloud-based alternatives and hybrid infrastructure solutions</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/managed-services">
                <h4>Managed Services</h4>
                <p>24/7 monitoring and management of your data centre infrastructure</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/cybersecurity">
                <h4>Cyber Security</h4>
                <p>Comprehensive security solutions for data centre protection</p>
              </RelatedServiceCard>
            </RelatedServices>
          </div>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default DataCenter;
