import { Header } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import props from './mock';

describe('<Header />', () => {
  it('should render image, description and head', () => {
    renderTheme(<Header {...props} />);
    expect(screen.getByRole('img', { name: `${props.blogName} - ${props.blogDescription}` })).toHaveAttribute(
      'src',
      props.logo,
    );
    expect(screen.getByRole('heading', { name: props.blogName })).toBeInTheDocument();
    expect(screen.getByText(props.blogDescription)).toBeInTheDocument();
  });

  it('should render just imsage', () => {
    renderTheme(<Header {...props} showText={false} />);
    expect(screen.getByRole('img', { name: `${props.blogName} - ${props.blogDescription}` })).toHaveAttribute(
      'src',
      props.logo,
    );
    expect(screen.queryByRole('heading', { name: props.blogName })).not.toBeInTheDocument();
    expect(screen.queryByText(props.blogDescription)).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Header {...props} showText={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
