import React from 'react';
import StyledButton from './styles';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'disabled';
  disabled?: boolean;
  onClick?: () => void;
  size?: 'flex' | "fixed" | "full";
  hasIcon?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }, ...props): JSX.Element => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
};

export default Button;
