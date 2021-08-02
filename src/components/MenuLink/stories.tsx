import { MenuLink, MenuLinkProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';
import { theme } from '../../styles/theme';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'Text',
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    children: { type: 'string' },
    link: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Template: Story<MenuLinkProps> = (args) => (
  <div style={{ background: theme.colors.primary, maxWidth: '320px', padding: theme.spacing.big }}>
    <MenuLink {...args} />
    <MenuLink {...args} />
    <MenuLink {...args} />
    <MenuLink {...args} />
  </div>
);
