import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavDropdown, DropdownContent, DropdownCategory, DropdownItem } from './NavbarElements';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('nav')) {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img
              src="/logo.png"
              alt="InfraByte IT System Logo"
              style={{ height: '70px', width: 'auto', marginRight: '10px' }}
            />
          InfraByte IT System
        </NavLogo>

        <MobileIcon onClick={toggle} aria-label="Toggle menu">
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

          <NavDropdown onClick={toggleDropdown}>
            <NavLinks
              to="/services"
              onClick={(e) => {
                if (window.innerWidth <= 992) {
                  e.preventDefault();
                  toggleDropdown(e);
                }
              }}
              style={{ cursor: 'pointer' }}
            >
              Services {window.innerWidth <= 992 && (dropdownOpen ? '▲' : '▼')}
            </NavLinks>

            <DropdownContent style={{
              opacity: window.innerWidth <= 992 && dropdownOpen ? 1 : undefined,
              visibility: window.innerWidth <= 992 && dropdownOpen ? 'visible' : undefined,
              display: window.innerWidth <= 992 ? (dropdownOpen ? 'block' : 'none') : undefined
            }}>
              <DropdownCategory>
                <div className="category-title">IT Infrastructure & Application Services</div>
                <DropdownItem to="/services/cloud-services">
                  <span className="service-icon" style={{background: 'linear-gradient(135deg, #4FC3F7, #29B6F6)'}}>☁️</span>
                  Cloud & DevOps
                </DropdownItem>
                <DropdownItem to="/services/digital-transformation">
                  <span className="service-icon" style={{background: 'linear-gradient(135deg, #AB47BC, #8E24AA)'}}>🚀</span>
                  Digital Transformation
                </DropdownItem>
                <DropdownItem to="/services/managed-services">
                  <span className="service-icon" style={{background: 'linear-gradient(135deg, #66BB6A, #43A047)'}}>⚙️</span>
                  Infrastructure Managed Services
                </DropdownItem>
                <DropdownItem to="/services/ai-automations">
                  <span className="service-icon" style={{background: 'linear-gradient(135deg, #FF7043, #FF5722)'}}>🤖</span>
                  AI Automations
                </DropdownItem>
              </DropdownCategory>

              <DropdownCategory>
                <div className="category-title">IT Infrastructure Solutions</div>
                <DropdownItem to="/services/cybersecurity">
                  <span className="service-icon" style={{background: 'linear-gradient(135deg, #EF5350, #E53935)'}}>🔒</span>
                  Cyber Security
                </DropdownItem>
                <DropdownItem to="/services/data-center">
                  <span className="service-icon" style={{background: 'linear-gradient(135deg, #5C6BC0, #3F51B5)'}}>🏢</span>
                  Data Centre Solutions
                </DropdownItem>
                <DropdownItem to="/services/end-user-computing">
                  <span className="service-icon" style={{background: 'linear-gradient(135deg, #26C6DA, #00BCD4)'}}>💻</span>
                  End User Computing
                </DropdownItem>
                <DropdownItem to="/services/web-hosting">
                  <span className="service-icon" style={{background: 'linear-gradient(135deg, #42A5F5, #2196F3)'}}>🌐</span>
                  Web & Domain Hosting
                </DropdownItem>
              </DropdownCategory>

              <DropdownCategory>
                <div className="category-title">Software Solutions</div>
                <DropdownItem to="/services/custom-software">
                  <span className="service-icon" style={{background: 'linear-gradient(135deg, #9C27B0, #673AB7)'}}>💻</span>
                  Custom Software Development
                </DropdownItem>
                <DropdownItem to="/services/enterprise-software">
                  <span className="service-icon" style={{background: 'linear-gradient(135deg, #FF9800, #F57C00)'}}>🏭</span>
                  Enterprise Software Solutions
                </DropdownItem>
                <DropdownItem to="/services/saas-solutions">
                  <span className="service-icon" style={{background: 'linear-gradient(135deg, #4CAF50, #388E3C)'}}>☁️</span>
                  SaaS Solutions
                </DropdownItem>
                <DropdownItem to="/services/software-support">
                  <span className="service-icon" style={{background: 'linear-gradient(135deg, #607D8B, #455A64)'}}>🔧</span>
                  Software Support
                </DropdownItem>
              </DropdownCategory>
            </DropdownContent>
          </NavDropdown>

          <NavItem>
            <NavLinks to="/contact">Contact</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
