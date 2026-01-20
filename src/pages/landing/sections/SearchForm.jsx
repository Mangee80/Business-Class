import React from 'react';
import styled from 'styled-components';
import Container from '../../../components/common/Container/Container';

const SearchSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.warmBeige};
`;

const Placeholder = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.mediumGray};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  text-transform: uppercase;
`;

/**
 * Search Form Section - Placeholder
 * Fields: From, To, Date, Class (Business/First)
 * Will be designed based on reference screenshots
 */
const SearchForm = () => {
  return (
    <SearchSection>
      <Container>
        <Placeholder>Search Form Section - Awaiting Design</Placeholder>
      </Container>
    </SearchSection>
  );
};

export default SearchForm;
