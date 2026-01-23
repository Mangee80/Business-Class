import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  min-height: 700px;
  overflow: hidden;
`;

const BannerSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BannerSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 2000ms ease-in-out;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(30, 42, 58, 0.15) 0%,
      rgba(30, 42, 58, 0.50) 70%,
      rgba(30, 42, 58, 0.65) 100%
    );
  }
`;

const SearchOverlay = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xxl};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 90%;
  max-width: 1000px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 95%;
    bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const SearchHeading = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: 56px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.ivory};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  letter-spacing: -0.02em;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  line-height: 1.15;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 32px;
  }
`;

const SearchSubheading = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.regular};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.ivory};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.90;
  letter-spacing: 0.02em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const SearchCard = styled.div`
  background: transparent;
  border: none;
  padding: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.caption};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;



const Input = styled.input`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.regular};
  color: #ffffff;

  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 1px;

  padding: 14px 18px;
  transition: border-color 200ms ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #ffffff;
  }
`;



const Select = styled.select`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.regular};
  color: #ffffff;

  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 1px;

  padding: 14px 18px;
  cursor: pointer;
  transition: border-color 200ms ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #ffffff;
  }
`;



const SearchButton = styled.button`
  grid-column: 1 / -1;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.ivory};
  background-color: ${({ theme }) => theme.colors.deepNavy};
  border: none;
  border-radius: 1px;
  padding: 18px 48px;
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wider};
  text-transform: uppercase;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  margin-top: ${({ theme }) => theme.spacing.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colors.charcoal};
  }

  &:active {
    transform: translateY(1px);
  }
`;

/**
 * Hero Section - Premium Banner with Search Overlay
 * Auto-scrolling background images with floating search form
 */
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Premium aviation images (using placeholder service)
  const bannerImages = [
    'Images/ref.jpg.jpeg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Search logic will be implemented later
    console.log('Search submitted');
  };

  return (
    <HeroSection>
      <BannerSlider>
        {bannerImages.map((image, index) => (
          <BannerSlide
            key={index}
            $image={image}
            $active={index === currentSlide}
          />
        ))}
      </BannerSlider>

      <SearchOverlay>
        <SearchHeading>Elevated Travel, Refined</SearchHeading>
        <SearchSubheading>
          Business and First Class flights for discerning travelers
        </SearchSubheading>

        <SearchCard>
          <SearchForm onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="from">From</Label>
              <Input
                id="from"
                type="text"
                placeholder="Departure city"
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="to">To</Label>
              <Input
                id="to"
                type="text"
                placeholder="Destination"
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="class">Class</Label>
              <Select id="class" defaultValue="business" required>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </Select>
            </InputGroup>

            <SearchButton type="submit">Search Flights</SearchButton>
          </SearchForm>
        </SearchCard>
      </SearchOverlay>
    </HeroSection>
  );
};

export default Banner;

