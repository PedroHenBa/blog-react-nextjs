import { CloneMe, CloneMeProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'CloneMe',
  component: CloneMe,
  args: {
    footerHtml: '<p><a href="#">teste footer</a></p>',
  },
} as Meta;

export const Template: Story<CloneMeProps> = (args) => (
  <div>
    <CloneMe {...args} />
  </div>
);
