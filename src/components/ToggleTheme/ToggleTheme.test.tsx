import { ToggleTheme } from './index';
import { renderTheme } from '../../styles/render-theme';
import { fireEvent, screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<ToggleTheme />', () => {
  beforeEach(() => {
    localStorage.setItem('theme', JSON.stringify({ ...theme, name: 'inverted' }));
  });

  afterEach(() => {
    localStorage.removeItem('theme');
  });

  it('should change theme to dark e default with checkbox', () => {
    renderTheme(<ToggleTheme />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('should render input with default theme', () => {
    localStorage.setItem('theme', JSON.stringify({ ...theme, name: 'default' }));
    renderTheme(<ToggleTheme />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ToggleTheme />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
