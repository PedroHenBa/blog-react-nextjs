import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacing.xbig};
    margin-bottom: ${theme.spacing.xbig};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};

    ${HeadingStyles} {
      margin: 0;
      margin-bottom: ${theme.spacing.medium};
    }
  `}
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacing.medium} 0;
    font-size: ${theme.spacing.medium};
  `}
`;

export const Cover = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    display: block;
    margin-bottom: ${theme.spacing.medium};
  `}
`;
