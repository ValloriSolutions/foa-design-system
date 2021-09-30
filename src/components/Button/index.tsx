import React, { ReactNode } from 'react';
import { CSSObject } from 'styled-components';
import { StyledButton, StyledGhostButton } from './styles';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'disabled';
  disabled?: boolean;
  onClick?: () => void;
  size?: 'fluid' | 'full';
  buttonWidth?: number;
  icon?: ReactNode;
  children?: ReactNode | string | undefined;
  small?: boolean;
  ghost?: boolean;
  active?: boolean;
  dropdownItem?: boolean;
  forwardRef?: React.Ref<HTMLButtonElement>;
  customStyles?: CSSObject;
}

export const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  return props.ghost ? (
    <StyledGhostButton {...props}>{props.children}</StyledGhostButton>
  ) : (
    <StyledButton {...props}>{props.children}</StyledButton>
  );
};
