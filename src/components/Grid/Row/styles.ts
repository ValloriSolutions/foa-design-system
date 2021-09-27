import styled, { CSSObject } from 'styled-components';

import { RowProps } from './';

export const StyledRow = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  width: ${({ fluid }): string => (fluid ? '100%' : 'auto')};
  ${({ customStyles }): CSSObject => customStyles || {}}
`;
