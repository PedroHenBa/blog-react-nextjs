import { PostsTemplate } from './index';
import { renderTheme } from '../../styles/render-theme';
import props from './mock';

describe('<PostsTemplate />', () => {
  it('should match snapshot with posts', () => {
    const { container } = renderTheme(<PostsTemplate {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot with no posts', () => {
    const { container } = renderTheme(<PostsTemplate {...props} posts={undefined} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
