import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 2;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: ${theme.colors.secondary};
    }

    &:focus + span {
      box-shadow: 0 0 1px #2196f3;
    }

    &:checked + span:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  `}
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  & {
    border-radius: 34px;
  }

  &:before {
    border-radius: 50%;
  }
`;
