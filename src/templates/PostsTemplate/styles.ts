import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacing.xsmall} ${theme.spacing.small};
    border-radius: ${theme.spacing.xsmall};
    border: none;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    cursor: pointer;

    &:active {
      transform: translateY(-1px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    &:disabled {
      background: ${theme.colors.darkText};
      color: ${theme.colors.white};
    }
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
