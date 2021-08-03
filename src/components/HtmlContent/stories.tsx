import { HtmlContent, HtmlContentProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';
import mockPost from './mock';

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: mockPost,
  },
} as Meta;

export const Template: Story<HtmlContentProps> = (args) => (
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <HtmlContent {...args} />
  </div>
);
