import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/components/Button';
import { IconMail } from '../src/icons';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: Story<ButtonProps> = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'I am the primary story button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'I am the secondary story button',
};

export const WithAction = Template.bind({});
WithAction.args = {
  children: 'I am a button with action',
  onClick: (): void => alert('I am clicked'),
};

export const WithButton = Template.bind({});
WithButton.args = {
  variant: 'primary',
  children: (
    <>
      <IconMail />
      Icon Button!
    </>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'I am a disabled story button',
  disabled: true,
};
