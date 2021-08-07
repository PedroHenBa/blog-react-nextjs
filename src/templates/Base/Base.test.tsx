import { BaseTemplate } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import props from './mock';

describe('<BaseTemplate />', () => {
  it('should render BaseTemplate component', () => {
    renderTheme(<BaseTemplate {...props} />);
    expect(screen.getByRole('img', { name: `${props.settings.blogName} - ${props.settings.blogDescription}` }));
    expect(screen.getByLabelText('Open or close menu')).toBeInTheDocument();
    expect(screen.getByText('Feito com carinho, ph')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });

  it('should render base elements', () => {
    const { container } = renderTheme(<BaseTemplate {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
