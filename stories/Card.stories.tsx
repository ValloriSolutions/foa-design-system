import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from '../src';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Template: Story<CardProps> = ({ color, children }) => {
  return <h1>em breve</h1>;
};
