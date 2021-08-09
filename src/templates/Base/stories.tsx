import { BaseTemplate, BaseTemplateProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';

export default {
  title: 'BaseTemplate',
  component: BaseTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: '',
    },
  },
} as Meta;

export const Template: Story<BaseTemplateProps> = (args) => (
  <div>
    <BaseTemplate {...args} />
  </div>
);
