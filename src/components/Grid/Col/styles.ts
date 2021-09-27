import styled, { CSSObject } from 'styled-components';
import { respondTo } from '../../../utils/grid';

import { ColProps } from './';

export const StyledCol = styled.div<ColProps>`
  ${({ collapse }): string =>
    collapse &&
    respondTo[collapse]`
        display: none;
  `}
  flex: ${({ size = 1 }): number => size};
  ${({ customStyles }): CSSObject => customStyles || {}}
`;
