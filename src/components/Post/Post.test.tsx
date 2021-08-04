import { Post } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import props from './mock';

describe('< />', () => {
  it('should render  component', () => {
    renderTheme(<Post {...props} />);
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: '' })).toBeInTheDocument();
    expect(screen.getByText('em 1 de ago. de 2021')).toBeInTheDocument();
  });
});
