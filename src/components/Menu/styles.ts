import styled, { css, DefaultTheme } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export type MenuOpen = {
  isMenuOpen: boolean;
};

const styledMenuIcon = (theme: DefaultTheme, isMenuOpen: MenuOpen['isMenuOpen']) => {
  if (isMenuOpen) {
    return css`
      color: ${theme.colors.secondary};
      left: 26rem;
    `;
  } else {
    return css`
      color: ${theme.colors.white};
      left: 0rem;
    `;
  }
};

export const Container = styled.div<MenuOpen>`
  ${({ theme, isMenuOpen }) => css`
    z-index: 1;
    position: fixed;
    padding: ${theme.spacing.big};
    background: ${theme.colors.primary};
    height: 100vh;
    width: 100%;
    max-width: 32rem;
    display: flex;
    top: 0;
    flex-flow: column nowrap;
    left: ${isMenuOpen ? 0 : '-31rem'};
    overflow-y: ${isMenuOpen ? 'auto' : 'hidden'};
    transition: all 300ms ease-in-out;

    @media ${theme.media.lteMedium} {
      left: ${isMenuOpen ? 0 : '-32rem'};
    }
  `}
`;

export const MenuOpen = styled.a<MenuOpen>`
  ${({ theme, isMenuOpen }) => css`
    z-index: 2;
    position: fixed;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    width: 3rem;
    height: 3rem;
    top: ${theme.spacing.medium};
    ${styledMenuIcon(theme, isMenuOpen)}
    transition: all 300ms ease-in-out;
  `}
`;

export const NavLinks = styled.nav`
  margin: auto;
  width: 100%;
`;

export const NavLogo = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacing.xxbig};
      img {
        border: 0.5rem solid ${theme.colors.secondary};
      }
    }
  `}
`;
