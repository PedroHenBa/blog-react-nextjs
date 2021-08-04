import { Menu, MenuProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';
import mock from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: mock,
} as Meta;

export const Template: Story<MenuProps> = (args) => (
  <div style={{ maxWidth: '60rem', margin: '5rem auto' }}>
    <Menu {...args} />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
      dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
      nec tellus sed augue semper porta. Mauris massa. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>.
      Vestibulum lacinia arcu eget nulla.{' '}
    </p>
    <br />
    <br />

    <p>
      <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Class aptent taciti sociosqu ad litora torquent
      per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
      Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
      tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus
      non, massa. Fusce ac turpis quis ligula lacinia aliquet.{' '}
    </p>
    <br />
    <br />

    <p>
      Mauris ipsum. <b>Curabitur sodales ligula in libero</b>. Nulla metus metus, ullamcorper vel, tincidunt sed,
      euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
      nostra, per inceptos himenaeos. <b>Maecenas mattis</b>. Nam nec ante. Sed lacinia, urna non tincidunt mattis,
      tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi.{' '}
      <b>Proin ut ligula vel nunc egestas porttitor</b>. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus
      consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.{' '}
    </p>
  </div>
);
