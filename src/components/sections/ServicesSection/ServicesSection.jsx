import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import Container from '../../common/Container/Container';

const ServicesSectionWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background-color: #FDFCF9;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Subtitle = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedGold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: 48px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.deepNavy};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: -0.01em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 36px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #EAEAEA;
  transition: all 0.4s ease;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
    border-color: transparent;
  }
`;

const ImageContainer = styled.div`
  height: 300px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${ServiceCard}:hover img {
    transform: scale(1.05);
  }
`;

const ContentContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ServiceTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.deepNavy};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ServiceDescription = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.mediumGray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-grow: 1;
`;

const DiscoverLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.deepNavy};
  cursor: pointer;
  transition: gap 0.3s ease;

  &:hover {
    gap: 12px;
    color: ${({ theme }) => theme.colors.mutedGold};
  }
`;

const services = [
  {
    title: "Private Charter",
    description: "Fly on your own schedule with access to over 5,000 aircraft worldwide. From light jets to ultra-long-range airliners.",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2000&auto=format&fit=crop",
    link: "/charter"
  },
  {
    title: "Empty Legs",
    description: "Exclusive access to one-way flights at significantly reduced rates. Spontaneous luxury for the flexible traveler.",
    image: "https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=2000&auto=format&fit=crop",
    link: "/empty-legs"
  },
  {
    title: "Concierge Services",
    description: "Beyond the flight—we arrange luxury hotels, chauffeur services, and exclusive experiences at your destination.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop",
    link: "/concierge"
  }
];

const ServicesSection = () => {
  return (
    <ServicesSectionWrapper>
      <Container>
        <Header>
          <Subtitle>Our Services</Subtitle>
          <SectionTitle>Elevated Travel Solutions</SectionTitle>
        </Header>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ImageContainer>
                <img src={service.image} alt={service.title} />
              </ImageContainer>
              <ContentContainer>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <DiscoverLink>
                  Discover <IoArrowForward />
                </DiscoverLink>
              </ContentContainer>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSectionWrapper>
  );
};

export default ServicesSection;
