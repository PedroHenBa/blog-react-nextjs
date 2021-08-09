import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.content};
    width: 100%;
    margin: ${theme.spacing.big} auto;
    padding: 0 ${theme.spacing.big};
    color: ${theme.colors.darkText};
  `}
`;
