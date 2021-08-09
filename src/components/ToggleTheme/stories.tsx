import { ToggleTheme } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'ToggleTheme',
  component: ToggleTheme,
  args: {},
} as Meta;

export const Template: Story = (args) => (
  <div>
    <ToggleTheme {...args} />
  </div>
);
