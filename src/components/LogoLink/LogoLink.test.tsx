import { LogoLink } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Opa" newTab={true} />);
    expect(screen.getByRole('heading', { name: 'Opa' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Opa' })).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Opa" srcImage="image.png" />);
    expect(screen.getByAltText('Opa')).toHaveAttribute('src', 'image.png');
  });

  it('should internal link', () => {
    renderTheme(<LogoLink link="/target" text="Opa" srcImage="image.png" />);
    expect(screen.getByAltText('Opa')).toHaveAttribute('src', 'image.png');
  });

  it('should render a text rather the image', () => {
    renderTheme(<LogoLink link="/target" text="Opa" />);
    expect(screen.getByRole('link', { name: 'Opa' })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Opa" srcImage="image.png" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
