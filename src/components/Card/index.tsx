import React, { PropsWithChildren, ReactChild } from 'react';

import { StyledCard } from './styles';

export type CardProps = {
  color?: string;
  children: ReactChild;
};

export const Card = ({
  children,
  color,
}: PropsWithChildren<CardProps>): JSX.Element => {
  return <StyledCard color={color}>{children}</StyledCard>;
};

export default Card;
