import * as Styled from './styles';
import { LogoLink, LogoLinkProps } from '../LogoLink';
import { MenuLink, MenuLinkProps } from '../MenuLink';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as MenuClosed } from '@styled-icons/material-outlined/Close';
import React, { useState } from 'react';

export const Menu = ({ links = [], blogName, logo }: MenuProps) => {
  const [isMenuOpen, setIsOpen] = useState(false);

  const handleOpenCloseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsOpen(!isMenuOpen);
  };

  return (
    <>
      <Styled.MenuOpen
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        isMenuOpen={isMenuOpen}
        onClick={handleOpenCloseMenu}
      >
        {isMenuOpen ? <MenuClosed aria-label="Close menu" /> : <MenuIcon aria-label="Open menu" />}
      </Styled.MenuOpen>

      <Styled.Container isMenuOpen={isMenuOpen} aria-hidden={!isMenuOpen}>
        <Styled.NavLogo>
          <LogoLink text={blogName} link="/" srcImage={logo} />
        </Styled.NavLogo>

        <Styled.NavLinks>
          {links.map((link) => (
            <MenuLink key={`menu-links-${link.id}`} text={link.text} link={link.link} />
          ))}
        </Styled.NavLinks>
      </Styled.Container>
    </>
  );
};

export type MenuPropsLinks = Array<MenuLinkProps & { id: string }>;

export type MenuProps = {
  logo: string;
  blogName: string;
  links?: MenuPropsLinks;
} & LogoLinkProps;
