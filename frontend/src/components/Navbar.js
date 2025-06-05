import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background: ${theme.navBg};
  color: ${theme.navText};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(Link)`
  color: ${theme.navText};
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;
const NavLink = styled(Link)`
  color: ${theme.navText};
  font-weight: 500;
  &:hover {
    color: ${theme.primary};
    text-decoration: underline;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo to="/">
        Tunisia Music Scene
      </Logo>
      <NavLinks>
        <NavLink to="/artists">Artists</NavLink>
        <NavLink to="/submit">Submit</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavLinks>
    </Nav>
  );
}
