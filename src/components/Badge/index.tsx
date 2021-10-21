import React, { useState } from 'react';
import { palette } from '../../theme/colors';
import { BadgeProps } from '../../types/layout';

import { Typography } from '../Typography';

import { StyledBadge } from './styles';

export const Badge: React.FC<
  BadgeProps & React.HTMLAttributes<HTMLDivElement>
> = ({ variant, label, customStyles, ...props }) => {
  const color = (): string => {
    switch (variant) {
      case 'red':
        return palette.colors.red;
      case 'gray':
        return palette.colors.gray.dark;
      case 'gray_red':
        return palette.colors.red;
      case 'green':
        return palette.colors.green;
      default:
        return palette.background.red;
    }
  };

  const bg = (): string => {
    switch (variant) {
      case 'red':
        return palette.background.red;
      case 'gray':
        return palette.colors.gray.lighter;
      case 'gray_red':
        return palette.colors.gray.light;
      case 'green':
        return palette.background.green;
      default:
        return palette.background.red;
    }
  };

  return (
    <StyledBadge
      color={color()}
      bg={bg()}
      customStyles={customStyles}
      {...props}
    >
      <Typography as="span">{label}</Typography>
    </StyledBadge>
  );
};
