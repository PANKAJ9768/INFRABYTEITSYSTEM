import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavDropdown, DropdownContent, DropdownCategory, DropdownItem } from './NavbarElements';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img
            src="/logo.png"
            alt="InfraByte IT Solutions"
            style={{
              height: '40px',
              width: 'auto',
              marginRight: '10px'
            }}
          />
          InfraByte IT Solutions
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <span></span>
          <span></span>
          <span></span>
        </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/about">About</NavLinks>
          </NavItem>
          <NavDropdown>
            <NavLinks to="/services">Services</NavLinks>
            <DropdownContent>
              <DropdownCategory>
                <div className="category-title">IT Infrastructure & Application Services</div>
                <DropdownItem to="/services/cloud-services">
                  <div className="service-icon" style={{background: 'linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%)', color: 'white'}}>
                    ☁️
                  </div>
                  Cloud & DevOps
                </DropdownItem>
                <DropdownItem to="/services/digital-transformation">
                  <div className="service-icon" style={{background: 'linear-gradient(135deg, #AB47BC 0%, #8E24AA 100%)', color: 'white'}}>
                    🚀
                  </div>
                  Digital Transformation
                </DropdownItem>
                <DropdownItem to="/services/managed-services">
                  <div className="service-icon" style={{background: 'linear-gradient(135deg, #66BB6A 0%, #43A047 100%)', color: 'white'}}>
                    ⚙️
                  </div>
                  Infrastructure Managed Services
                </DropdownItem>
                <DropdownItem to="/services/ai-automations">
                  <div className="service-icon" style={{background: 'linear-gradient(135deg, #FF7043 0%, #FF5722 100%)', color: 'white'}}>
                    🤖
                  </div>
                  AI Automations
                </DropdownItem>
              </DropdownCategory>
              <DropdownCategory>
                <div className="category-title">IT Infrastructure Solutions</div>
                <DropdownItem to="/services/cybersecurity">
                  <div className="service-icon" style={{background: 'linear-gradient(135deg, #EF5350 0%, #E53935 100%)', color: 'white'}}>
                    🔒
                  </div>
                  Cyber Security
                </DropdownItem>
                <DropdownItem to="/services/data-center">
                  <div className="service-icon" style={{background: 'linear-gradient(135deg, #5C6BC0 0%, #3F51B5 100%)', color: 'white'}}>
                    🏢
                  </div>
                  Data Centre Solutions
                </DropdownItem>
                <DropdownItem to="/services/end-user-computing">
                  <div className="service-icon" style={{background: 'linear-gradient(135deg, #26C6DA 0%, #00BCD4 100%)', color: 'white'}}>
                    💻
                  </div>
                  End User Computing
                </DropdownItem>
                <DropdownItem to="/services/web-hosting">
                  <div className="service-icon" style={{background: 'linear-gradient(135deg, #42A5F5 0%, #2196F3 100%)', color: 'white'}}>
                    🌐
                  </div>
                  Web & Domain Hosting
                </DropdownItem>
              </DropdownCategory>
              <DropdownCategory>
                <div className="category-title">Software Solutions</div>
                <DropdownItem to="/services/custom-software">
                  <div className="service-icon" style={{background: 'linear-gradient(135deg, #9C27B0 0%, #673AB7 100%)', color: 'white'}}>
                    💻
                  </div>
                  Custom Software Development
                </DropdownItem>
                <DropdownItem to="/services/enterprise-software">
                  <div className="service-icon" style={{background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)', color: 'white'}}>
                    🏭
                  </div>
                  Enterprise Software Solutions
                </DropdownItem>
                <DropdownItem to="/services/saas-solutions">
                  <div className="service-icon" style={{background: 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)', color: 'white'}}>
                    ☁️
                  </div>
                  SaaS Solutions
                </DropdownItem>
                <DropdownItem to="/services/software-support">
                  <div className="service-icon" style={{background: 'linear-gradient(135deg, #607D8B 0%, #455A64 100%)', color: 'white'}}>
                    🔧
                  </div>
                  Software Support
                </DropdownItem>
              </DropdownCategory>
            </DropdownContent>
          </NavDropdown>
         {/*  <NavItem>
            <NavLinks to="/industries">Industries</NavLinks>
          </NavItem> */}
          <NavItem>
            <NavLinks to="/contact">Contact</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
