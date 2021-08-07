import { PostTemplate, PostTemplateProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';

export default {
  title: 'PostTemplate',
  component: PostTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PostTemplateProps>;

export const Template: Story<PostTemplateProps> = (args) => (
  <div>
    <PostTemplate {...args} />
  </div>
);
