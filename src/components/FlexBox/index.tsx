import React, { ReactNode } from 'react';
import { CSSObject } from 'styled-components';

import { StyledFlexBox } from './styles';

export interface FlexBoxProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  isCard?: boolean;
  verticalAlign?: 'center' | 'flex-start' | 'flex-end' | false;
  horizontalAlign?: 'center' | 'flex-start' | 'flex-end' | false;
  direction?: 'row' | 'column';
  fullWidth?: boolean;
  fullHeight?: boolean;
  fullScreen?: boolean;
  customStyles?: CSSObject;
}

export const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  isCard = false,
  verticalAlign = isCard && 'center',
  horizontalAlign = isCard && 'center',
  direction = 'column',
  ...props
}): JSX.Element => {
  return (
    <StyledFlexBox
      verticalAlign={verticalAlign}
      horizontalAlign={horizontalAlign}
      direction={direction}
      {...props}
    >
      {children}
    </StyledFlexBox>
  );
};
