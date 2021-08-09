import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing.medium} 0;
    max-width: ${theme.sizes.content};
    width: 100%;
    margin: ${theme.spacing.big} auto;
    padding: 0 ${theme.spacing.big};

    span {
      margin: 0 0 0 0.5rem;
    }

    span::before {
      content: ' ';
    }

    span::after {
      content: ', ';
    }
    span:last-child::after {
      content: '';
    }

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;
      &:hover {
        filter: brightness(50%);
      }
    }
  `}
`;
