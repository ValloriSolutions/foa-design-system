import React, { FC, HTMLAttributes, ReactChild } from 'react';

import { StyledCard } from './styles';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  children: ReactChild;
}

export const Card: FC<CardProps> = ({ children, color }): JSX.Element => {
  return <StyledCard color={color}>{children}</StyledCard>;
};
