import styled, { css, DefaultTheme } from 'styled-components';

export type postContainerProps = {
  size: 'max' | 'content';
};

const PostContainerStyles = {
  max: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.max};
  `,
  content: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.content};
  `,
};

export const PostContainer = styled.div<postContainerProps>`
  ${({ theme, size }) => css`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.spacing.big};
    ${PostContainerStyles[size](theme)}
  `}
`;
