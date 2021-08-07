import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: ${theme.spacing.xhuge};
    width: 100%;
    max-width: ${theme.sizes.max};
    color: ${theme.colors.darkText};
    margin: 0 auto;

    ${HeadingStyles} {
      margin: 0 0 calc(${theme.spacing.small} - 1rem);
    }

    @media ${theme.media.lteSmall} {
      display: flex;
      flex-flow: column wrap;
      & > ${HeadingStyles} {
        margin: 0 0 ${theme.spacing.medium} 0;
      }
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    flex-flow: row wrap;
    margin-left: ${theme.spacing.medium};
    max-width: 44rem;

    @media ${theme.media.lteSmall} {
      margin-left: 0;
    }
  `}
`;
