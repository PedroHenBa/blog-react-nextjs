import { PostGrid, PostGridProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';

export default {
  title: 'PostGrid',
  component: PostGrid,
  args: {
    posts: mock.posts,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PostGridProps>;

export const Template: Story<PostGridProps> = (args) => (
  <div>
    <PostGrid {...args} />
  </div>
);

export const NoPosts: Story<PostGridProps> = () => (
  <div>
    <PostGrid />
  </div>
);
