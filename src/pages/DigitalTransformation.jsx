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
  background: linear-gradient(135deg, #AB47BC 0%, #8E24AA 100%);
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
    background: linear-gradient(135deg, #AB47BC 0%, #8E24AA 100%);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(171, 71, 188, 0.2);
    border-color: #8E24AA;
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
      color: #8E24AA;
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
  background: linear-gradient(135deg, #AB47BC 0%, #8E24AA 100%);
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
  background: linear-gradient(135deg, #AB47BC 0%, #8E24AA 100%);
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
  color: #8E24AA;
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

const DigitalTransformation = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <h1>Digital Transformation</h1>
          <p>Strategic consulting and implementation for complete business modernization and operational excellence</p>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Transform Your Business</SectionTitle>
          <SectionDescription>
            Digital transformation isn't just about technology—it's about reimagining your entire business model,
            processes, and culture. We guide organizations through every phase of their digital journey, from strategy
            development to implementation and optimization. Our holistic approach ensures sustainable transformation
            that drives measurable business value.
          </SectionDescription>

          <Grid>
            <Card>
              <CardIcon>🎯</CardIcon>
              <CardTitle>Digital Strategy</CardTitle>
              <CardContent>
                Develop a comprehensive digital roadmap aligned with your business objectives and market dynamics.
              </CardContent>
              <FeatureList>
                <li>Market analysis and competitive positioning</li>
                <li>Technology assessment and gap analysis</li>
                <li>Digital capability framework</li>
                <li>Multi-year transformation roadmap</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>⚙️</CardIcon>
              <CardTitle>Process Automation</CardTitle>
              <CardContent>
                Automate manual processes and streamline workflows for improved efficiency and reduced costs.
              </CardContent>
              <FeatureList>
                <li>Process mining and optimization</li>
                <li>RPA implementation</li>
                <li>Workflow automation</li>
                <li>Integration solutions</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>📊</CardIcon>
              <CardTitle>Business Intelligence</CardTitle>
              <CardContent>
                Convert data into actionable insights with advanced analytics and business intelligence solutions.
              </CardContent>
              <FeatureList>
                <li>Data warehouse design and implementation</li>
                <li>BI and analytics platforms</li>
                <li>Advanced reporting dashboards</li>
                <li>Predictive analytics</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🤝</CardIcon>
              <CardTitle>Change Management</CardTitle>
              <CardContent>
                Ensure successful adoption of new technologies and processes through comprehensive change management.
              </CardContent>
              <FeatureList>
                <li>Organizational readiness assessment</li>
                <li>Change communication strategy</li>
                <li>Staff training and development</li>
                <li>Adoption tracking and optimization</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section style={{ background: '#f8f9fa' }}>
        <Container>
          <SectionTitle>Our Transformation Framework</SectionTitle>
          <SectionDescription>
            We follow a proven 5-phase framework to ensure successful digital transformation
          </SectionDescription>

          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepContent>
              <h4>Discovery & Assessment</h4>
              <p>
                Understand your current state, business challenges, competitive landscape, and technology infrastructure.
                We conduct workshops and assessments to define the vision for your digital future.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepContent>
              <h4>Strategy & Planning</h4>
              <p>
                Develop a comprehensive digital transformation strategy with clear objectives, key initiatives,
                required investments, and expected outcomes. We create a detailed execution roadmap.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepContent>
              <h4>Solution Design</h4>
              <p>
                Design integrated technology solutions that address your business challenges. We ensure solutions
                are scalable, secure, and aligned with your overall IT strategy.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>4</StepNumber>
            <StepContent>
              <h4>Implementation</h4>
              <p>
                Execute the transformation with phased implementation approach. We manage technical implementation,
                user training, and change management to ensure smooth adoption.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>5</StepNumber>
            <StepContent>
              <h4>Optimization & Growth</h4>
              <p>
                Measure transformation success, optimize processes, and identify opportunities for continuous improvement
                and future innovation initiatives.
              </p>
            </StepContent>
          </ProcessStep>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Industries We Serve</SectionTitle>

          <Grid>
            <Card>
              <CardIcon>🏦</CardIcon>
              <CardTitle>Financial Services</CardTitle>
              <CardContent>
                Digital banking, payment systems, fintech integration, and regulatory compliance solutions.
              </CardContent>
            </Card>

            <Card>
              <CardIcon>🏥</CardIcon>
              <CardTitle>Healthcare</CardTitle>
              <CardContent>
                EHR systems, patient engagement platforms, and healthcare data analytics solutions.
              </CardContent>
            </Card>

            <Card>
              <CardIcon>🏭</CardIcon>
              <CardTitle>Manufacturing</CardTitle>
              <CardContent>
                IoT integration, supply chain optimization, and Industry 4.0 transformation.
              </CardContent>
            </Card>

            <Card>
              <CardIcon>🛍️</CardIcon>
              <CardTitle>Retail</CardTitle>
              <CardContent>
                Omnichannel commerce, customer experience platforms, and inventory management systems.
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <h3>Begin Your Digital Transformation Today</h3>
            <p>
              Let us help you unlock new growth opportunities through strategic digital innovation.
              Schedule a consultation with our transformation experts.
            </p>
            <CTAButton to="/contact">
              Schedule Consultation →
            </CTAButton>
          </CTASection>

          <div style={{ marginTop: '4rem' }}>
            <SectionTitle style={{ marginBottom: '2rem' }}>Explore Other Services</SectionTitle>
            <RelatedServices>
              <RelatedServiceCard to="/services/cloud-services">
                <h4>Cloud & DevOps</h4>
                <p>Transform your infrastructure with secure, scalable cloud solutions</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/managed-services">
                <h4>Managed Services</h4>
                <p>24/7 monitoring and support for your entire IT infrastructure</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/cybersecurity">
                <h4>Cyber Security</h4>
                <p>Comprehensive security solutions to protect your digital assets</p>
              </RelatedServiceCard>
            </RelatedServices>
          </div>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default DigitalTransformation;
