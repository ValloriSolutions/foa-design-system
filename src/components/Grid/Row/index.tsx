import React, { ReactNode } from 'react';
import { CSSObject } from 'styled-components';

import { StyledRow } from './styles';

export type RowProps = {
  children: ReactNode;
  fluid?: boolean;
  customStyles?: CSSObject;
};

export const Row: React.FC<RowProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <StyledRow {...props}>{children}</StyledRow>;
};

export default Row;
