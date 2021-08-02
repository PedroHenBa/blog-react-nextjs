import { HtmlContent, HtmlContentProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'TextComponent',
  component: HtmlContent,
  args: {
    html: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasel
    lus sapien purus, tempor vel sodales eu, tincidunt in libero. Fusce fringill
    a leo ornare ipsum venenatis, eu convallis odio suscipit. Maecenas quis nulla nec libero
    lobortis ultrices sed in nibh. Vivamus ac erat commodo, eleifend est in, hendrerit justo.
    Nunc ac rutrum urna.`,
  },
} as Meta;

export const Template: Story<HtmlContentProps> = (args) => (
  <div>
    <HtmlContent {...args} />
  </div>
);
