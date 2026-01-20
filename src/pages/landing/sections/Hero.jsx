import React from 'react';
import styled from 'styled-components';
import Container from '../../../components/common/Container/Container';

const HeroSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background-color: ${({ theme }) => theme.colors.ivory};
`;

const Placeholder = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.mediumGray};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  text-transform: uppercase;
`;

/**
 * Hero Section - Placeholder
 * Will be designed based on reference screenshots
 */
const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Placeholder>Hero Section - Awaiting Design</Placeholder>
      </Container>
    </HeroSection>
  );
};

export default Hero;
