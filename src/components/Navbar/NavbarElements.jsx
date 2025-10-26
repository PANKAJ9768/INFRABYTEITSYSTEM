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
  transition: .2s;
  background: rgba(255,255,255,.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0,0,0,.06);
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled(Link)`
  color: #667eea;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 1rem;

    img {
      height: 35px !important;
      margin-right: 8px !important;
    }
  }
`;

export const MobileIcon = styled.button`
  background: none;
  border: 0;
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 8px;

  span {
    width: 24px;
    height: 2px;
    background: #667eea;
    display: block;
  }

  @media (max-width: 992px) {
    display: flex;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 992px) {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    padding: 16px;
    border-bottom: 1px solid rgba(0,0,0,.06);
    display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
  }
`;

export const NavItem = styled.li`
  position: relative;
`;

export const NavLinks = styled(Link)`
  padding: 10px 14px;
  border-radius: 8px;
  color: #333;
  display: inline-block;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #667eea;
    background: rgba(102,126,234,.08);
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

  @media screen and (max-width: 768px) {
    .category-title {
      padding: 0.75rem 30px;
      background: rgba(102, 126, 234, 0.1);
      margin: 0.5rem 0;
    }
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 420px;
  max-width: 450px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
  border-radius: 12px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  padding: 1rem 0;
  border: 1px solid rgba(0,0,0,0.05);

  @media screen and (max-width: 768px) {
    position: static;
    box-shadow: none;
    background: rgba(102, 126, 234, 0.05);
    margin-top: 1rem;
    border-radius: 0;
    min-width: auto;
    width: 100%;
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

  &:hover {
    background: rgba(102, 126, 234, 0.06);
    color: #667eea;
    transform: translateX(4px);
  }

  .service-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    font-size: 14px;
    flex-shrink: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 15px 30px;
    font-size: 1rem;

    &:hover {
      transform: translateX(8px);
    }
  }
`;
