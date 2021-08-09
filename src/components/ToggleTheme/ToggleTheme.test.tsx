import { ToggleTheme } from './index';
import { renderTheme } from '../../styles/render-theme';

describe('<ToggleTheme />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<ToggleTheme />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
