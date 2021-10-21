import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Badge } from '../src/components/Badge';
import { BadgeProps } from '../src/types/layout';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: Story<BadgeProps> = (props) => <Badge {...props} />;

export const Green = Template.bind({});
Green.args = {
  label: 'Green Badge',
  variant: 'green',
};

export const Red = Template.bind({});
Red.args = {
  label: 'Red Badge',
  variant: 'red',
};

export const Gray = Template.bind({});
Gray.args = {
  label: 'Gray Badge',
  variant: 'gray',
};

export const GrayRed = Template.bind({});
GrayRed.args = {
  label: 'Gray+Red Badge',
  variant: 'gray_red',
};

export const RedGray = Template.bind({});
RedGray.args = {
  label: 'Red+Gray Badge',
  variant: 'red_gray',
};
export const Bordered = Template.bind({});
Bordered.args = {
  label: 'Bordered Green Badge',
  variant: 'green',
  bordered: true,
};
