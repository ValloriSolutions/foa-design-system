import React from 'react';
import { FlexBoxProps } from '../FlexBox';

import { StyledCard } from './styles';

export interface CardProps extends FlexBoxProps {
  noRound?: boolean;
  bordered?: boolean;
  noShadow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  customStyles,
  ...props
}): JSX.Element => {
  return (
    <StyledCard isCard customStyles={customStyles} {...props}>
      {children}
    </StyledCard>
  );
};
