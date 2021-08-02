import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing.small};
    font-size: 1.8rem;
    border-right: 0.5rem solid ${theme.colors.primary};
    transition: all 300ms ease-in-out;

    &:hover {
      border-right: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    }
  `}
`;
