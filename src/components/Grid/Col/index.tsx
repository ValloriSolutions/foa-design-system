import React, { ReactNode } from 'react';
import { CSSObject } from 'styled-components';
import { breakpointsType } from '../../../utils/grid';

import { StyledCol } from './styles';

export type ColProps = {
  children?: ReactNode;
  collapse?: keyof breakpointsType;
  size?: number;
  customStyles?: CSSObject;
};

export const Col: React.FC<ColProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <StyledCol {...props}>{children}</StyledCol>;
};

export default Col;
