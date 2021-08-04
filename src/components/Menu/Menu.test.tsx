import { Menu } from './index';
import { renderTheme } from '../../styles/render-theme';
import { fireEvent, screen } from '@testing-library/react';
import props from './mock';

describe('<Menu />', () => {
  it('should render button links', () => {
    renderTheme(<Menu {...props} links={undefined} />);
    expect(screen.getByRole('link', { name: 'Open or close menu' })).toBeInTheDocument();
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
  });

  it('should open/close menu on button click', () => {
    renderTheme(<Menu {...props} />);
    const buttonLink = screen.getByRole('link', { name: 'Open or close menu' });
    fireEvent.click(buttonLink);

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: props.blogName })).toBeInTheDocument();
    fireEvent.click(buttonLink);

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
