import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const NotFound = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spacing.big};
    text-align: center;
    font-size: ${theme.fonts.sizes.small};
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: 120rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacing.big};
    padding: ${theme.spacing.medium};

    @media ${theme.media.lteSmall} {
      grid-template-columns: 1fr;
      padding: ${theme.spacing.small};
    }
  `}
`;
