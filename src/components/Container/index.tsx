import React, { PropsWithChildren, ReactNode } from 'react';

import { StyledContainer } from './styles';

export type ContainerProps = {
  children: ReactNode;
};

export const Container = ({
  children,
}: PropsWithChildren<ContainerProps>): JSX.Element => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
