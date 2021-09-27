import React, { PropsWithChildren, ReactChild } from 'react';
import { CSSObject } from 'styled-components';
import { breakpointsType } from '../../../utils/grid';

import { StyledCol } from './styles';

export type ColProps = {
  children?: ReactChild;
  collapse?: keyof breakpointsType;
  size?: number;
  customStyles?: CSSObject;
};

export const Col = ({
  children,
  ...props
}: PropsWithChildren<ColProps>): JSX.Element => {
  return <StyledCol {...props}>{children}</StyledCol>;
};

export default Col;
