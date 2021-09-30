import React, { ReactNode } from 'react';
import { CSSObject } from 'styled-components';
import { StyledButton } from './styles';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'disabled';
  disabled?: boolean;
  onClick?: () => void;
  size?: 'fluid' | 'full';
  buttonWidth?: number;
  icon?: ReactNode;
  children?: ReactNode | string | undefined;
  small?: boolean;
  dropdownItem?: boolean;
  forwardRef?: React.Ref<HTMLButtonElement>;
  customStyles?: CSSObject;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  disabled,
  onClick,
  size,
  buttonWidth,
  icon,
  children,
  ...rest
}): JSX.Element => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      icon={icon}
      buttonWidth={buttonWidth}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
