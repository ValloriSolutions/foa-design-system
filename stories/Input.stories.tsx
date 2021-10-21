import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from '../src/components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;
type ev = React.ChangeEvent<HTMLInputElement>;
export const Default: Story<InputProps> = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
      name="input"
      placeholder="text input"
      value={inputValue}
      onChange={(e: ev): void => setInputValue(e.target.value)}
    />
  );
};
export const WithErrorMessage: Story<InputProps> = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
      name="input"
      placeholder="text input"
      value={inputValue}
      onChange={(e: ev): void => setInputValue(e.target.value)}
      messageError="error message"
    />
  );
};
export const OnlyBorderError: Story<InputProps> = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
      inputError
      name="input"
      placeholder="text input"
      value={inputValue}
      onChange={(e: ev): void => setInputValue(e.target.value)}
    />
  );
};
export const PasswordInput: Story<InputProps> = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
      showIconPassword
      placeholder="Type your password"
      name="input"
      value={inputValue}
      onChange={(e: ev): void => setInputValue(e.target.value)}
      type="password"
      maxLength={6}
    />
  );
};
export const Disabled: Story<InputProps> = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
      placeholder="text input"
      name="input"
      value={inputValue}
      onChange={(e: ev): void => setInputValue(e.target.value)}
      disabled
    />
  );
};
