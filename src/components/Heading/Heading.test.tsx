import { renderTheme } from '../../styles/render-theme';
import { Heading } from './index';
import { theme } from '../../styles/theme';
import { screen } from '@testing-library/react';
import { BlogThemeProvider } from '../../contexts/BlogThemeContext';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });
    expect(heading).toHaveStyle({
      color: theme.colors.primary,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should with white color', () => {
    renderTheme(<Heading colorDark={false}>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerender(
      <BlogThemeProvider>
        <Heading size="medium">text</Heading>);
      </BlogThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.big,
    });

    rerender(
      <BlogThemeProvider>
        <Heading size="big">text</Heading>);
      </BlogThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xbig,
    });

    rerender(
      <BlogThemeProvider>
        <Heading size="huge">text</Heading>);
      </BlogThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  it('should render correct font size when screen less than 768px', () => {
    renderTheme(<Heading size="huge">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xbig, { media: theme.media.lteMedium });
  });

  it('should with uppercase letter', () => {
    renderTheme(<Heading uppercase={true}>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h3">text</Heading>);
    const h3 = container.querySelector('h3');
    expect(h3.tagName.toLowerCase()).toBe('h3');
  });
});
