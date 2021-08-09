import { PostsTemplate, PostsTemplateProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';

export default {
  title: 'PostsTemplate',
  component: PostsTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: '',
    },
  },
} as Meta<PostsTemplateProps>;

export const Template: Story<PostsTemplateProps> = (args) => (
  <div>
    <PostsTemplate {...args} />
  </div>
);
