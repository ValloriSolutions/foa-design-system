import React from 'react';
import { Meta, Story } from '@storybook/react';
import {Card, CardProps } from '../src/components/Card';
import { hexToRgba } from '../src/utils/colors';

const meta: Meta = {
  title: 'Card',
  component: Card,
};

export default meta;

const Template: Story<CardProps> = args => <Card {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  color: hexToRgba('#333333', 0.5),
};

