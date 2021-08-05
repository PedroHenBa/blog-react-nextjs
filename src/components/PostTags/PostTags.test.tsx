import { PostTags } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import props from './mock';

describe('<PostTags />', () => {
  it('should not render tags', () => {
    const { container } = renderTheme(<PostTags />);
    expect(container.firstChild).toBe(null);
  });

  it('should render tags', () => {
    renderTheme(<PostTags {...props} />);
    expect(screen.getByText('Tags:')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostTags />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
