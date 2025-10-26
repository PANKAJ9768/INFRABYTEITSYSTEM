import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles.js'; // Fixed import path

// Components
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Analytics from './components/Analytics.jsx';

// Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import CloudServices from './pages/CloudServices.jsx';
import Cybersecurity from './pages/Cybersecurity.jsx';
import DataCenter from './pages/DataCenter.jsx';
import DigitalTransformation from './pages/DigitalTransformation.jsx';
import EndUserComputing from './pages/EndUserComputing.jsx';
import ManagedServices from './pages/ManagedServices.jsx';
import Industries from './pages/Industries.jsx';
import Contact from './pages/Contact.jsx';
import AIAutomations from './pages/AIAutomations.jsx';
import WebHosting from './pages/WebHosting.jsx';
import CustomSoftware from './pages/CustomSoftware.jsx';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Analytics />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cloud-services" element={<CloudServices />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/data-center" element={<DataCenter />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/end-user-computing" element={<EndUserComputing />} />
          <Route path="/services/managed-services" element={<ManagedServices />} />
          <Route path="/services/ai-automations" element={<AIAutomations />} />
          <Route path="/services/web-hosting" element={<WebHosting />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
{/*           <Route path="/industries" element={<Industries />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
