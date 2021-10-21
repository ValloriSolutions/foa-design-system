import styled, { CSSObject } from 'styled-components';
import { pxToRem } from '../../utils/grid';
interface CustomProps {
  isLoading?: boolean;
  customStyles?: CSSObject;
}

export const StyledTable = styled.table<CustomProps>`
  & > thead,
  tbody {
    tr {
      & > th,
      td {
        padding-right: ${pxToRem(16)};
      }
    }
  }
  & > tbody {
    & > :last-child {
      & > tr,
      td {
        border-bottom: none;
      }
    }
  }
  border-spacing: 0;
  -webkit-border-horizontal-spacing: 0px;
  -webkit-border-vertical-spacing: 0px;
  border-collapse: collapse;
  ${({ customStyles }): CSSObject => customStyles || {}}
`;