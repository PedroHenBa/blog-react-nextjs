import * as Styled from './styles';
import P from 'prop-types';
import { ReactNode } from 'react';

export const Salve = ({ children}: salveProps ) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

export type salveProps = {
  children: ReactNode,
};

import { Salve, SalveProps  } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Salve',
  component: Salve,
  args: {
    children: 'Text',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<SalveProps> = (args) => (
  <div>
    <Salve {...args} />
  </div>
);
