import { PostsTemplate } from './index';
import { renderTheme } from '../../styles/render-theme';
import props from './mock';
import { screen } from '@testing-library/react';

describe('<PostsTemplate />', () => {
  it('should render more posts when button is clicked', () => {
    renderTheme(<PostsTemplate {...props} />);
    screen.getByRole('button');
  });

  it('should match snapshot with posts', () => {
    const { container } = renderTheme(<PostsTemplate {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot with no posts', () => {
    const { container } = renderTheme(<PostsTemplate {...props} posts={undefined} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
