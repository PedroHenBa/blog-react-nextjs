import { PostTemplate } from './index';
import { renderTheme } from '../../styles/render-theme';
import props from './mock';

describe('<PostTemplate />', () => {
  it('should match snapshot ', () => {
    const { container } = renderTheme(<PostTemplate {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
