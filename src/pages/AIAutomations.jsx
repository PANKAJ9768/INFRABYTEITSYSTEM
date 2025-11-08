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
  background: linear-gradient(135deg, #FF7043 0%, #FF5722 100%);
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
    background: linear-gradient(135deg, #FF7043 0%, #FF5722 100%);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(255, 87, 34, 0.2);
    border-color: #FF5722;
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
      color: #FF5722;
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
  background: linear-gradient(135deg, #FF7043 0%, #FF5722 100%);
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
  background: linear-gradient(135deg, #FF7043 0%, #FF5722 100%);
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
  color: #FF5722;
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

const AIAutomations = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <h1>AI & Automations</h1>
          <p>Intelligent automation solutions powered by artificial intelligence and machine learning technologies</p>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Intelligent Automation Solutions</SectionTitle>
          <SectionDescription>
            Transform your business operations with AI-powered automation. We help organizations leverage machine learning,
            natural language processing, and robotic process automation to improve efficiency, reduce costs, and enable
            employees to focus on high-value work. Our solutions are tailored to your specific business challenges.
          </SectionDescription>

          <Grid>
            <Card>
              <CardIcon>🤖</CardIcon>
              <CardTitle>Robotic Process Automation</CardTitle>
              <CardContent>
                Automate repetitive, rules-based tasks to dramatically improve efficiency and accuracy.
              </CardContent>
              <FeatureList>
                <li>Process automation and optimization</li>
                <li>Bot development and deployment</li>
                <li>Workflow automation</li>
                <li>Compliance and audit trails</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>💬</CardIcon>
              <CardTitle>AI Chatbots & NLP</CardTitle>
              <CardContent>
                Enhance customer engagement with intelligent conversational AI and natural language processing.
              </CardContent>
              <FeatureList>
                <li>Chatbot development and deployment</li>
                <li>Natural language processing</li>
                <li>Sentiment analysis</li>
                <li>Multi-language support</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>📊</CardIcon>
              <CardTitle>Predictive Analytics</CardTitle>
              <CardContent>
                Make data-driven decisions with machine learning models that predict future outcomes.
              </CardContent>
              <FeatureList>
                <li>Predictive modeling</li>
                <li>Forecasting and trend analysis</li>
                <li>Anomaly detection</li>
                <li>Business intelligence integration</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🎯</CardIcon>
              <CardTitle>Computer Vision</CardTitle>
              <CardContent>
                Leverage image and video analysis for quality control, security, and operational insights.
              </CardContent>
              <FeatureList>
                <li>Image classification and detection</li>
                <li>Video analysis and monitoring</li>
                <li>Document processing</li>
                <li>Quality assurance automation</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section style={{ background: '#f8f9fa' }}>
        <Container>
          <SectionTitle>Our AI Implementation Process</SectionTitle>
          <SectionDescription>
            We follow a structured approach to ensure successful AI solution implementation
          </SectionDescription>

          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepContent>
              <h4>Problem Discovery</h4>
              <p>
                Identify high-impact use cases where AI can deliver significant business value. We analyze your
                processes and data to prioritize automation opportunities.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepContent>
              <h4>Data Preparation</h4>
              <p>
                Prepare and organize data for training machine learning models. We handle data collection, cleaning,
                and feature engineering to ensure model accuracy.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepContent>
              <h4>Model Development</h4>
              <p>
                Build and train AI models using the latest frameworks and algorithms. We iterate and optimize for
                accuracy, performance, and reliability.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>4</StepNumber>
            <StepContent>
              <h4>Deployment & Integration</h4>
              <p>
                Deploy models into production with proper monitoring and maintenance. We integrate AI solutions
                seamlessly into your existing systems.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>5</StepNumber>
            <StepContent>
              <h4>Optimization & Support</h4>
              <p>
                Continuously monitor model performance, retrain with new data, and optimize for improved accuracy
                and business outcomes.
              </p>
            </StepContent>
          </ProcessStep>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Use Cases & Industry Applications</SectionTitle>

          <Grid>
            <Card>
              <CardIcon>📋</CardIcon>
              <CardTitle>Document Processing</CardTitle>
              <CardContent>
                Automate extraction and processing of data from documents, invoices, and forms.
              </CardContent>
            </Card>

            <Card>
              <CardIcon>🏥</CardIcon>
              <CardTitle>Healthcare Analytics</CardTitle>
              <CardContent>
                Predictive healthcare analytics for disease diagnosis and patient outcome optimization.
              </CardContent>
            </Card>

            <Card>
              <CardIcon>🛒</CardIcon>
              <CardTitle>Customer Personalization</CardTitle>
              <CardContent>
                AI-powered product recommendations and personalized customer experiences.
              </CardContent>
            </Card>

            <Card>
              <CardIcon>⚠️</CardIcon>
              <CardTitle>Fraud Detection</CardTitle>
              <CardContent>
                Identify fraudulent transactions and anomalies using machine learning models.
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <h3>Unlock the Power of AI for Your Business</h3>
            <p>
              Let our AI experts help you identify and implement automation solutions that drive real business value.
              Schedule a consultation today.
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

              <RelatedServiceCard to="/services/digital-transformation">
                <h4>Digital Transformation</h4>
                <p>Strategic consulting for complete business modernization</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/custom-software">
                <h4>Custom Software</h4>
                <p>Tailored software solutions built to your specific requirements</p>
              </RelatedServiceCard>
            </RelatedServices>
          </div>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default AIAutomations;
