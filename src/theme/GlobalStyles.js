import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Base HTML */
  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.sans};
    font-size: ${({ theme }) => theme.typography.fontSize.regular};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.charcoal};
    background-color: ${({ theme }) => theme.colors.ivory};
    min-height: 100vh;
  }

  /* Typography Defaults */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.serif};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    color: ${({ theme }) => theme.colors.deepNavy};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize.h1};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.tight};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.h2};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.h3};
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.fontSize.h4};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.deepNavy};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.mutedGold};
    }
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Lists */
  ul, ol {
    list-style: none;
  }

  /* Buttons */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  /* Inputs */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Focus styles for accessibility */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.mutedGold};
    outline-offset: 2px;
  }

  /* Remove focus outline for mouse users */
  :focus:not(:focus-visible) {
    outline: none;
  }

  /* Selection */
  ::selection {
    background-color: ${({ theme }) => theme.colors.warmBeige};
    color: ${({ theme }) => theme.colors.deepNavy};
  }
`;

export default GlobalStyles;
