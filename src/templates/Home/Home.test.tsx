import { Home } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<Home />', () => {
  it('should render Home component', () => {
    renderTheme(<Home />);
    expect(screen.getByRole('heading', { name: 'clone me' })).toBeInTheDocument();
  });
});
