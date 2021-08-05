import { PostTags, PostTagsProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';

export default {
  title: 'PostTags',
  component: PostTags,
  args: mock,
} as Meta<PostTagsProps>;

export const Template: Story<PostTagsProps> = (args) => (
  <div style={{ padding: '0 2.4rem' }}>
    <PostTags {...args} />
  </div>
);

export const noStory: Story<PostTagsProps> = () => (
  <div style={{ padding: '0 2.4rem' }}>
    <PostTags />
  </div>
);
