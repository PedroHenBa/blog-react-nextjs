import { MenuLink } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://www.google.com.br/">children</MenuLink>);
    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute('target', '_self');
  });

  it('should render a link', () => {
    renderTheme(
      <MenuLink link="https://www.google.com.br/" newTab={true}>
        children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute('target', '_blank');
  });

  it('should render internal link from next', () => {
    renderTheme(
      <MenuLink link="/oi" newTab={true}>
        children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute('target', '_blank');
  });

  it('should render a link', () => {
    const { container } = renderTheme(<MenuLink link="https://www.google.com.br/">children</MenuLink>);
    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  display: block;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #FFFFFF;
  margin-bottom: 1.6rem;
  font-size: 1.8rem;
  border-right: 0.5rem solid #000000;
  -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
}

.c0:hover {
  border-right: 0.5rem solid #dc143c;
  color: #dc143c;
}

<a
  class="c0"
  href="https://www.google.com.br/"
  target="_self"
>
  children
</a>
`);
  });
});
