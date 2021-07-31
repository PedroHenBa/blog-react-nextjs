import { CloneMe } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<CloneMe />', () => {
  it('should render CloneMe component', () => {
    renderTheme(<CloneMe footerHtml="<h1>Ola</h1>" />);
    expect(screen.getByRole('heading', { name: 'Ola' })).toBeInTheDocument();
  });
});
