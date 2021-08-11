import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-left: 0.5rem;
    @media ${theme.media.lteMedium} {
      margin-left: 0;
    }
  `}
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

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    margin-left: calc(${theme.spacing.big} - 0.2rem);

    > svg {
      width: 2.4rem;
      margin-left: 1rem;
    }
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    width: 25rem;
    border: 0;
    border-bottom: 2px solid ${theme.colors.primary};
    outline: none;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
    padding: 0.3rem 0.7rem;
    font-size: ${theme.fonts.sizes.small};
  `}
`;
