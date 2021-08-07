import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xhuge};
    padding: 0 ${theme.spacing.big};
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${theme.spacing.xhuge};
  `}
`;

export const FooterContainer = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
`;
