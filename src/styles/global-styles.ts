import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.darkText};
    background: ${({ theme }) => theme.colors.white};
  }

  h1, h2, h3, h4, h5, h6{
    font-family: ${({ theme }) => theme.fonts.family.default};
    margin: ${({ theme }) => theme.spacing.big} 0;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
  }
  /*
  p {
    margin: ${({ theme }) => theme.spacing.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacing.medium};
    padding: ${({ theme }) => theme.spacing.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .table {
    width: 100%;
    overflow-y: auto ;
  }
  */
`;
