import React from 'react';
import styled from 'styled-components';
import Container from '../../../components/common/Container/Container';

const TrustSectionWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
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
 * Trust Section - Placeholder
 * Brief explanation of service, trust-first language
 * Will be designed based on reference screenshots
 */
const TrustSection = () => {
  return (
    <TrustSectionWrapper>
      <Container>
        <Placeholder>Trust Section - Awaiting Design</Placeholder>
      </Container>
    </TrustSectionWrapper>
  );
};

export default TrustSection;
