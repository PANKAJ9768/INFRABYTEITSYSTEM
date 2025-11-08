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
  background: linear-gradient(135deg, #42A5F5 0%, #2196F3 100%);
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
    background: linear-gradient(135deg, #42A5F5 0%, #2196F3 100%);
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(33, 150, 243, 0.2);
    border-color: #2196F3;
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
      color: #2196F3;
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
  background: linear-gradient(135deg, #42A5F5 0%, #2196F3 100%);
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
  background: linear-gradient(135deg, #42A5F5 0%, #2196F3 100%);
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
  color: #2196F3;
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

const WebHosting = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <h1>Web Hosting & Domain Services</h1>
          <p>Reliable web hosting, domain management, and website performance optimization services</p>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Complete Web Presence Solutions</SectionTitle>
          <SectionDescription>
            Your website is your digital storefront. We provide reliable web hosting, domain registration, and
            website management services to ensure your online presence is fast, secure, and always available. From
            shared hosting to dedicated servers, we have solutions for businesses of all sizes. Our expert team handles
            all technical aspects so you can focus on your business.
          </SectionDescription>

          <Grid>
            <Card>
              <CardIcon>🌐</CardIcon>
              <CardTitle>Domain Registration & Management</CardTitle>
              <CardContent>
                Register and manage your domain names with full DNS control and professional email.
              </CardContent>
              <FeatureList>
                <li>Domain registration (.com, .in, etc.)</li>
                <li>Domain transfer assistance</li>
                <li>DNS management</li>
                <li>Email forwarding and professional email</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🖥️</CardIcon>
              <CardTitle>Web Hosting Solutions</CardTitle>
              <CardContent>
                Scalable hosting solutions with excellent uptime, security, and performance.
              </CardContent>
              <FeatureList>
                <li>Shared hosting packages</li>
                <li>Cloud hosting and VPS</li>
                <li>Dedicated servers</li>
                <li>WordPress managed hosting</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🔐</CardIcon>
              <CardTitle>SSL Certificates & Security</CardTitle>
              <CardContent>
                Secure your website with trusted SSL certificates and security measures.
              </CardContent>
              <FeatureList>
                <li>SSL certificate installation</li>
                <li>HTTPS enforcement</li>
                <li>Security scanning and monitoring</li>
                <li>DDoS protection</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>⚡</CardIcon>
              <CardTitle>Performance Optimization</CardTitle>
              <CardContent>
                Optimize your website for speed and performance to improve user experience and SEO.
              </CardContent>
              <FeatureList>
                <li>CDN integration</li>
                <li>Image optimization</li>
                <li>Caching and compression</li>
                <li>Page speed optimization</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section style={{ background: '#f8f9fa' }}>
        <Container>
          <SectionTitle>Hosting Setup & Management</SectionTitle>
          <SectionDescription>
            We handle everything from domain registration to website deployment and maintenance
          </SectionDescription>

          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepContent>
              <h4>Domain Registration</h4>
              <p>
                Register your perfect domain name and set up DNS records. We help you choose the right domain and
                handle all registration requirements.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepContent>
              <h4>Hosting Setup</h4>
              <p>
                Select the right hosting solution based on your website requirements. We configure your hosting
                environment and set up all necessary services.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepContent>
              <h4>Website Deployment</h4>
              <p>
                Deploy your website to the hosting environment. We handle file uploads, database setup, and SSL
                certificate installation.
              </p>
            </StepContent>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>4</StepNumber>
            <StepContent>
              <h4>Monitoring & Maintenance</h4>
              <p>
                Continuous monitoring of your website uptime, performance, and security. We handle regular backups,
                updates, and optimization.
              </p>
            </StepContent>
          </ProcessStep>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Hosting Features & Benefits</SectionTitle>

          <Grid>
            <Card>
              <CardIcon>⚡</CardIcon>
              <CardTitle>High Performance</CardTitle>
              <CardContent>
                Fast page loading times with SSD storage, optimized servers, and CDN integration.
              </CardContent>
              <FeatureList>
                <li>99.9% uptime guarantee</li>
                <li>SSD storage</li>
                <li>Optimized web servers</li>
                <li>Global CDN network</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>🔒</CardIcon>
              <CardTitle>Security First</CardTitle>
              <CardContent>
                Enterprise-grade security to protect your website and customer data.
              </CardContent>
              <FeatureList>
                <li>Free SSL certificates</li>
                <li>DDoS protection</li>
                <li>Malware scanning</li>
                <li>Automatic backups</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>📈</CardIcon>
              <CardTitle>Scalability</CardTitle>
              <CardContent>
                Grow your website without worrying about outages or performance issues.
              </CardContent>
              <FeatureList>
                <li>Easy resource scaling</li>
                <li>Load balancing</li>
                <li>Auto-scaling capabilities</li>
                <li>Enterprise-grade support</li>
              </FeatureList>
            </Card>

            <Card>
              <CardIcon>💬</CardIcon>
              <CardTitle>Expert Support</CardTitle>
              <CardContent>
                24/7 expert support to help with any hosting, domain, or performance issues.
              </CardContent>
              <FeatureList>
                <li>24/7 technical support</li>
                <li>Email, chat, and phone support</li>
                <li>Knowledgebase and tutorials</li>
                <li>Dedicated account managers</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Hosting Plans</SectionTitle>
          <SectionDescription>
            Choose the right hosting plan for your needs. We offer flexible options from startups to enterprises.
          </SectionDescription>

          <Grid>
            <Card>
              <CardTitle>📊 Shared Hosting</CardTitle>
              <CardContent>Perfect for startups and small websites with shared resources.</CardContent>
              <FeatureList>
                <li>Unlimited bandwidth</li>
                <li>Multiple domains</li>
                <li>Email accounts</li>
                <li>Free SSL certificate</li>
              </FeatureList>
            </Card>

            <Card>
              <CardTitle>☁️ Cloud Hosting</CardTitle>
              <CardContent>Scalable cloud hosting with on-demand resources.</CardContent>
              <FeatureList>
                <li>Auto-scaling resources</li>
                <li>Pay-as-you-go pricing</li>
                <li>High availability</li>
                <li>Advanced analytics</li>
              </FeatureList>
            </Card>

            <Card>
              <CardTitle>🖥️ Dedicated Server</CardTitle>
              <CardContent>Complete server control for maximum performance and reliability.</CardContent>
              <FeatureList>
                <li>Full server control</li>
                <li>Maximum performance</li>
                <li>Highest security</li>
                <li>Custom configurations</li>
              </FeatureList>
            </Card>

            <Card>
              <CardTitle>📱 WordPress Hosting</CardTitle>
              <CardContent>Optimized hosting specifically for WordPress websites.</CardContent>
              <FeatureList>
                <li>Pre-installed WordPress</li>
                <li>One-click updates</li>
                <li>Plugin compatibility</li>
                <li>WordPress expert support</li>
              </FeatureList>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <h3>Get Your Website Online Today</h3>
            <p>
              Choose reliable web hosting and domain services. Let our team help you register your domain and set up
              your hosting. Contact us to get started.
            </p>
            <CTAButton to="/contact">
              Get Started with Web Hosting →
            </CTAButton>
          </CTASection>

          <div style={{ marginTop: '4rem' }}>
            <SectionTitle style={{ marginBottom: '2rem' }}>Explore Other Services</SectionTitle>
            <RelatedServices>
              <RelatedServiceCard to="/services/custom-software">
                <h4>Custom Software</h4>
                <p>Custom web applications hosted on our reliable infrastructure</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/digital-transformation">
                <h4>Digital Transformation</h4>
                <p>Transform your online presence with modern web solutions</p>
              </RelatedServiceCard>

              <RelatedServiceCard to="/services/cybersecurity">
                <h4>Cyber Security</h4>
                <p>Protect your website with comprehensive security solutions</p>
              </RelatedServiceCard>
            </RelatedServices>
          </div>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default WebHosting;
