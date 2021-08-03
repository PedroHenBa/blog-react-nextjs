import { ArticleHeader } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import props from './mock';

describe('<ArticleHeader />', () => {
  it('should render ArticleHeader component', () => {
    const { container } = renderTheme(<ArticleHeader {...props} />);
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
    expect(screen.getByText(props.excerpt)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: '' })).toBeInTheDocument();
    expect(screen.getByText('em 1 de ago. de 2021')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
