import { PostCard } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import props from './mock';

describe('<PostCard />', () => {
  it('should render image, links with correct href and excerpt', () => {
    renderTheme(<PostCard {...props} />);
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
    expect(screen.getByText(props.excerpt)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: props.title })[0]).toHaveAttribute('href', `/post/${props.slug}`);
  });
});
