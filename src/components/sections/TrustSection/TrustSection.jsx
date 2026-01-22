import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoShieldCheckmarkOutline, IoLockClosedOutline, IoDiamondOutline } from 'react-icons/io5';
import Container from '../../common/Container/Container';

const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background-color: ${({ theme }) => theme.colors.ivory};
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

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: 48px;
  color: ${({ theme }) => theme.colors.deepNavy};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.mediumGray};
  line-height: 1.8;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const IconWrapper = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.deepNavy};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  opacity: 0.8;
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.deepNavy};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CardText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.charcoal};
  line-height: 1.7;
  opacity: 0.8;
`;

const TrustSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <Header>
          <Subtitle>Our Philosophy</Subtitle>
          <Title>Quiet Luxury, Redefined</Title>
          <Description>
            We believe that true luxury lies in the details that go unnoticed. 
            It is the absence of friction, the assurance of safety, and the seamless orchestration of your journey.
          </Description>
        </Header>

        <Grid>
          <Card 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <IconWrapper><IoShieldCheckmarkOutline /></IconWrapper>
            <CardTitle>Uncompromising Safety</CardTitle>
            <CardText>
              Your safety is our absolute priority. We partner exclusively with operators who exceed global aviation safety standards, ensuring peace of mind on every flight.
            </CardText>
          </Card>

          <Card 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <IconWrapper><IoLockClosedOutline /></IconWrapper>
            <CardTitle>Seamless Privacy</CardTitle>
            <CardText>
              Discretion is the cornerstone of our service. From private terminals to secure bookings, we protect your anonymity and ensure an undisturbed journey.
            </CardText>
          </Card>

          <Card 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <IconWrapper><IoDiamondOutline /></IconWrapper>
            <CardTitle>Personalized Excellence</CardTitle>
            <CardText>
              Every detail is tailored to your preferences. Whether it's a specific culinary request or ground transportation, our concierge team anticipates your needs.
            </CardText>
          </Card>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default TrustSection;

