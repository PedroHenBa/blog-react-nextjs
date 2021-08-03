import { ArticleMeta } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import props from './mock';

describe('<ArticleMeta />', () => {
  it('should render author and categories links', () => {
    renderTheme(<ArticleMeta {...props} />);
    expect(screen.getByRole('link', { name: props.author.displayName })).toHaveAttribute(
      'href',
      `/author/${props.author.slug}`,
    );
    expect(props.categories.length).toBe(2);
    expect(screen.getByRole('link', { name: 'Tech' })).toHaveAttribute('href', `/category/tech`);
    expect(screen.getByRole('link', { name: 'JS' })).toHaveAttribute('href', `/category/javascript`);
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta {...props} />);
    expect(screen.getByText('em 2 de mar. de 2021')).toHaveAttribute('datetime', props.createdAt);
  });

  it('should render author and categories links', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
