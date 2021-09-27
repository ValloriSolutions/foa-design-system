import React, { PropsWithChildren } from 'react';
import { CSSObject } from 'styled-components';

import { StyledRow } from './styles';

export type RowProps = {
  children: React.ReactNode;
  fluid?: boolean;
  customStyles?: CSSObject;
};

export const Row = ({
  children,
  ...props
}: PropsWithChildren<RowProps>): JSX.Element => {
  return <StyledRow {...props}>{children}</StyledRow>;
};

export default Row;
