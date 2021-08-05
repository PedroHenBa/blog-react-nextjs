import { PostGrid } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import props from './mock';

describe('<PostGrid />', () => {
  it('should not render posts', () => {
    renderTheme(<PostGrid />);
    expect(screen.getByText('Nenhum post encontrado aqui')).toBeInTheDocument();
  });

  it('should render posts', () => {
    renderTheme(<PostGrid {...props} />);
    expect(screen.queryByText('Nenhum post encontrado aqui')).not.toBeInTheDocument();
    expect(screen.getAllByRole('heading')).toHaveLength(4);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostGrid {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
