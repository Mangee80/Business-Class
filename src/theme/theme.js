/**
 * Design Tokens for Premium Flight Booking Platform
 * Philosophy: Quiet Luxury - muted, refined, understated
 */

const theme = {
  colors: {
    // Backgrounds
    ivory: '#FDFCF9',
    warmBeige: '#F5F1E8',
    sand: '#E8E4DB',
    
    // Borders & Dividers
    softGray: '#E8E6E1',
    
    // Text
    mediumGray: '#9A9A98',
    charcoal: '#3D3D3B',
    deepNavy: '#1E2A3A',
    
    // Accent (use sparingly)
    mutedGold: '#B8A88A',
  },

  typography: {
    fontFamily: {
      serif: "'Playfair Display', Georgia, serif",
      sans: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    },
    fontSize: {
      h1: '52px',
      h2: '40px',
      h3: '32px',
      h4: '24px',
      large: '18px',
      regular: '16px',
      small: '14px',
      caption: '12px',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.7,
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.05em',
      wider: '0.1em',
    },
  },

  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '40px',
    xl: '64px',
    xxl: '96px',
    xxxl: '128px',
  },

  layout: {
    maxWidth: '1200px',
    containerPadding: '24px',
  },

  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1200px',
  },

  transitions: {
    fast: '150ms ease',
    normal: '250ms ease',
    slow: '400ms ease',
  },
};

export default theme;
