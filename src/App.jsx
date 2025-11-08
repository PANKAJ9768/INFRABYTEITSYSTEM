import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles.js';

// Components
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Analytics from './components/Analytics.jsx';

// Pages - Main
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Industries from './pages/Industries.jsx';

// Pages - Service Details (Infrastructure & Application Services)
import CloudServices from './pages/CloudServices.jsx';
import DigitalTransformation from './pages/DigitalTransformation.jsx';
import ManagedServices from './pages/ManagedServices.jsx';
import AIAutomations from './pages/AIAutomations.jsx';

// Pages - Service Details (IT Infrastructure Solutions)
import Cybersecurity from './pages/Cybersecurity.jsx';
import DataCenter from './pages/DataCenter.jsx';
import EndUserComputing from './pages/EndUserComputing.jsx';
import WebHosting from './pages/WebHosting.jsx';

// Pages - Service Details (Software Solutions)
import CustomSoftware from './pages/CustomSoftware.jsx';
import EnterpriseSoftware from './pages/EnterpriseSoftware.jsx';
import SaasSolutions from './pages/SaasSolutions.jsx';
import SoftwareSupport from './pages/SoftwareSupport.jsx';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Analytics />
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />

        {/* Service Routes - Infrastructure & Application Services */}
        <Route path="/services/cloud-services" element={<CloudServices />} />
        <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
        <Route path="/services/managed-services" element={<ManagedServices />} />
        <Route path="/services/ai-automations" element={<AIAutomations />} />

        {/* Service Routes - IT Infrastructure Solutions */}
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route path="/services/data-center" element={<DataCenter />} />
        <Route path="/services/end-user-computing" element={<EndUserComputing />} />
        <Route path="/services/web-hosting" element={<WebHosting />} />

        {/* Service Routes - Software Solutions */}
        <Route path="/services/custom-software" element={<CustomSoftware />} />
        <Route path="/services/enterprise-software" element={<EnterpriseSoftware />} />
        <Route path="/services/saas-solutions" element={<SaasSolutions />} />
        <Route path="/services/software-support" element={<SoftwareSupport />} />

        {/* 404 Catch-all - Optional */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}
