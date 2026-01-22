import React from "react";
import styled from "styled-components";
import Container from '../../../components/common/Container/Container';

const ServicesSectionWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: #F5F5F5;
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.deepNavy};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  letter-spacing: -0.01em;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const ServiceCard = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 
              0 8px 16px rgba(0, 0, 0, 0.08),
              0 16px 32px rgba(0, 0, 0, 0.06);
  transition: transform ${({ theme }) => theme.transitions.normal},
              box-shadow ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06), 
                0 12px 24px rgba(0, 0, 0, 0.1),
                0 20px 40px rgba(0, 0, 0, 0.08);
  }
`;

const ImageSection = styled.div`
  background-color: #FAFAFA;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 520px;
  border-bottom: 1px solid #F0F0F0;
  overflow: hidden;

  img {
    width: 100%;
    height: 520px;
    object-fit: cover;
    filter: grayscale(80%) opacity(0.85);
  }
`;

const TextSection = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  min-height: 250px;
`;

const ServiceTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize.h4};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.deepNavy};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

const ServiceDescription = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.mediumGray};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  max-width: 100%;
`;

const DiscoverLink = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.mediumGray};
  text-decoration: none;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  transition: color ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  margin-top: auto;

  &:hover {
    color: ${({ theme }) => theme.colors.mutedGold};
  }
`;

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80',
      title: 'Private Aviation',
      description: 'Your stress of most no iques, long global across global wrerg.',
    },
    {
      id: 2,
      icon: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
      title: 'Chauffeur hailing',
      description: 'Enjoy the quality of aution long the chauffe., within minutes booking.',
    },
    {
      id: 3,
      icon: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
      title: 'Global Business Concierge',
      description: 'The aare quality a conveniey the riding minutes booking.',
    },
  ];

  return (
    <ServicesSectionWrapper>
      <Container>
        <SectionTitle>Our Exclusive Services</SectionTitle>
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ImageSection>
                <img src={service.icon} alt={service.title} />
              </ImageSection>
              <TextSection>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <DiscoverLink href="#">- Discover More -</DiscoverLink>
              </TextSection>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSectionWrapper>
  );
};

export default ServicesSection;
