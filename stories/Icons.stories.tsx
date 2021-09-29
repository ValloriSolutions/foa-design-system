import React from 'react';
import { Meta, Story } from '@storybook/react';
import * as Icons from '../src/icons';
import { IconProps } from '../src/icons/types';

export default {
  title: 'Components/Icons',
  argTypes: {
    color: { control: 'color' },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Mail: Story<IconProps> = (args) => <Icons.IconMail {...args} />;
export const Bell: Story<IconProps> = (args) => <Icons.IconBell {...args} />;
export const Credit: Story<IconProps> = (args) => (
  <Icons.IconCredit {...args} />
);
export const DashBoard: Story<IconProps> = (args) => (
  <Icons.IconDashboard {...args} />
);
export const Edit: Story<IconProps> = (args) => <Icons.IconEdit {...args} />;
export const Filter: Story<IconProps> = (args) => (
  <Icons.IconFilter {...args} />
);
export const Print: Story<IconProps> = (args) => <Icons.IconPrint {...args} />;
export const Search: Story<IconProps> = (args) => (
  <Icons.IconSearch {...args} />
);
export const Ticket: Story<IconProps> = (args) => (
  <Icons.IconTicket {...args} />
);
