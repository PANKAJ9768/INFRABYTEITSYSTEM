import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  height: 72px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const NavLogo = styled(Link)`
  color: #667eea;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  z-index: 51;

  @media (max-width: 768px) {
    font-size: 1rem;

    img {
      height: 35px !important;
      margin-right: 8px !important;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    span {
      display: none;
    }
  }
`;

export const MobileIcon = styled.button`
  background: none;
  border: none;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  padding: 10px;
  cursor: pointer;
  z-index: 51;
  min-width: 44px;
  min-height: 44px;

  span {
    width: 25px;
    height: 3px;
    background: #667eea;
    display: block;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  @media (max-width: 992px) {
    display: flex;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 992px) {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    padding: 16px;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    max-height: calc(100vh - 72px);
    overflow-y: auto;
  }
`;

export const NavItem = styled.li`
  position: relative;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const NavLinks = styled(Link)`
  padding: 12px 16px;
  border-radius: 8px;
  color: #333;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  min-height: 44px;
  font-size: 0.95rem;

  &:hover {
    color: #667eea;
    background: rgba(102,126,234,0.08);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 992px) {
    width: 100%;
    padding: 14px 20px;
    justify-content: flex-start;
    font-size: 1rem;
  }
`;

export const NavDropdown = styled.li`
  position: relative;

  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (max-width: 992px) {
    width: 100%;

    &:hover > div {
      position: static;
      transform: none;
    }
  }
`;

export const DropdownCategory = styled.div`
  padding: 0.75rem 0;

  .category-title {
    font-size: 0.75rem;
    font-weight: 600;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 0.75rem 20px 0.5rem;
    margin-bottom: 0.5rem;
    background: #f8f9fa;
    border-radius: 6px;
    margin: 0 10px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0,0,0,0.08);
    margin-bottom: 0.75rem;
    padding-bottom: 1rem;
  }

  @media (max-width: 992px) {
    .category-title {
      padding: 0.75rem 20px;
      background: rgba(102, 126, 234, 0.1);
      margin: 0.5rem 0;
      font-size: 0.8rem;
    }
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 450px;
  max-width: 500px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
  border-radius: 12px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  padding: 1rem 0;
  border: 1px solid rgba(0,0,0,0.05);
  margin-top: 8px;

  @media (max-width: 992px) {
    position: static;
    box-shadow: none;
    background: rgba(102, 126, 234, 0.02);
    margin-top: 0.5rem;
    border-radius: 8px;
    min-width: auto;
    width: 100%;
    opacity: 1;
    visibility: visible;
    transform: none;
    border: 1px solid rgba(102, 126, 234, 0.1);
  }
`;

export const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  min-height: 44px;

  &:hover {
    background: rgba(102, 126, 234, 0.06);
    color: #667eea;
    transform: translateX(4px);
  }

  &:active {
    transform: translateX(2px);
  }

  .service-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    font-size: 16px;
    flex-shrink: 0;
  }

  @media (max-width: 992px) {
    padding: 16px 20px;
    font-size: 1rem;

    &:hover {
      transform: translateX(8px);
    }

    .service-icon {
      width: 40px;
      height: 40px;
      font-size: 18px;
    }
  }
`;
