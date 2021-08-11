import { Comments, CommentsProps } from './index';
import { renderTheme } from '../../styles/render-theme';

const props: CommentsProps = {
  id: '1',
  title: 'Salve',
  slug: 'salve',
  allowComments: true,
};

describe('<Comments />', () => {
  it('should match snapshot with area for comments', () => {
    const { container } = renderTheme(<Comments {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render area for comments', () => {
    const { container } = renderTheme(<Comments {...props} allowComments={false} />);
    expect(container.firstChild).toBe(null);
  });
});
