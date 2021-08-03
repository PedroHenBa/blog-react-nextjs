import { ArticleHeader, ArticleHeaderProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta;

export const Template: Story<ArticleHeaderProps> = (args) => (
  <div>
    <ArticleHeader {...args} />
  </div>
);
