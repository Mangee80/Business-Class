import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../../common/Container/Container';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.ivory};
  border-bottom: 1px solid ${({ theme }) => theme.colors.softGray};
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.deepNavy};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  
  &:hover {
    color: ${({ theme }) => theme.colors.deepNavy};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.charcoal};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  text-transform: uppercase;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.mutedGold};
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner>
          <Logo to="/">Business Class</Logo>
          <Nav>
            <NavLink to="/">Search</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
