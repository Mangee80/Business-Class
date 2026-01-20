import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../../common/Container/Container';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.warmBeige};
  border-top: 1px solid ${({ theme }) => theme.colors.softGray};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  margin-top: auto;
`;

const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FooterNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const FooterLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.charcoal};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.mutedGold};
  }
`;

const Divider = styled.div`
  width: 100%;
  max-width: 200px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.softGray};
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.caption};
  color: ${({ theme }) => theme.colors.mediumGray};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  text-transform: uppercase;
  margin: 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <FooterNav>
            <FooterLink to="/privacy">Privacy</FooterLink>
            <FooterLink to="/terms">Terms</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterNav>
          <Divider />
          <Copyright>{currentYear} Business Class. All rights reserved.</Copyright>
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
