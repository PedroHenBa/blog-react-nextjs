import { Header, HeaderProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';

export default {
  title: 'Header',
  component: Header,
  args: mock,
} as Meta;

export const Template: Story<HeaderProps> = (args) => (
  <div>
    <Header {...args} />
  </div>
);
