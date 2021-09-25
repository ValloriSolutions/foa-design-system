import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { getOpacity } from './utils/colors';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Thing: FC<Props> = ({ children }) => {
  return (
    <div>
      {getOpacity('#333333', 'F7F7FF')}
      {children}
    </div>
  );
};
