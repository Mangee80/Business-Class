import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../../common/Container/Container';
import { IoLocationOutline } from 'react-icons/io5';

const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background-color: ${({ theme }) => theme.colors.ivory};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const TitleGroup = styled.div``;

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
  font-weight: 400;
  color: ${({ theme }) => theme.colors.deepNavy};
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 36px;
  }
`;

const ViewAllBtn = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.deepNavy};
  border-bottom: 1px solid ${({ theme }) => theme.colors.deepNavy};
  padding-bottom: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.mutedGold};
    border-color: ${({ theme }) => theme.colors.mutedGold};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 600px;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const LargeCard = styled(motion.div)`
  position: relative;
  height: 100%;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 400px;
  }
`;

const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  height: 100%;
`;

const SmallCard = styled(motion.div)`
  position: relative;
  flex: 1;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
  transition: transform 0.8s ease;

  ${LargeCard}:hover &, ${SmallCard}:hover & {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const DestinationInfo = styled.div`
  color: #FFFFFF;
  transform: translateY(0);
  transition: transform 0.3s ease;
`;

const DestinationName = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const DestinationMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.9;
`;

const DestinationsSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <Header>
          <TitleGroup>
            <Subtitle>Curated Journeys</Subtitle>
            <Title>Featured Destinations</Title>
          </TitleGroup>
          <ViewAllBtn>View All Destinations</ViewAllBtn>
        </Header>

        <Grid>
          <LargeCard
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CardImage bg="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop" />
            <Overlay>
              <DestinationInfo>
                <DestinationName>Swiss Alps</DestinationName>
                <DestinationMeta>
                  <IoLocationOutline /> Switzerland
                </DestinationMeta>
              </DestinationInfo>
            </Overlay>
          </LargeCard>

          <SideColumn>
            <SmallCard
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CardImage bg="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop" />
              <Overlay>
                <DestinationInfo>
                  <DestinationName>Maldives</DestinationName>
                  <DestinationMeta>
                    <IoLocationOutline /> Indian Ocean
                  </DestinationMeta>
                </DestinationInfo>
              </Overlay>
            </SmallCard>

            <SmallCard
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CardImage bg="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop" />
              <Overlay>
                <DestinationInfo>
                  <DestinationName>Paris</DestinationName>
                  <DestinationMeta>
                    <IoLocationOutline /> France
                  </DestinationMeta>
                </DestinationInfo>
              </Overlay>
            </SmallCard>
          </SideColumn>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default DestinationsSection;
