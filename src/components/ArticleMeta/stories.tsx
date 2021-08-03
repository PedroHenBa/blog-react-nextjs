import { ArticleMeta, ArticleMetaProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';

export default {
  title: 'ArticleMeta',
  component: ArticleMeta,
  args: mock,
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta;

export const Template: Story<ArticleMetaProps> = (args) => (
  <div>
    <ArticleMeta {...args} />
  </div>
);
