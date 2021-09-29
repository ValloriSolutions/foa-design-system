import React from 'react';
import { CSSObject } from 'styled-components';
import StyledTypography from './styles';

export interface TypographyProps {
  variant?: 'primary' | 'secondary' | 'disabled' | 'white';
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small';
  customStyles?: CSSObject;
  children: React.ReactNode | string;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <StyledTypography {...props}>{children}</StyledTypography>;
};
