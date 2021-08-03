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
      margin: 0 0 6px;
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    flex-flow: row wrap;
    margin-left: ${theme.spacing.medium};
    max-width: 44rem;
  `}
`;
