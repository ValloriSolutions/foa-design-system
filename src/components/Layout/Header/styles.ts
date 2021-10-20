import styled from 'styled-components';
import { Row } from '../../Grid/Row';
import { pxToRem } from '../../../utils/grid';

export const StyledHeader = styled(Row)`
  width: calc(100vw - ${pxToRem(280)});
  height: ${pxToRem(110)};
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-bottom: ${pxToRem(30)};
`;
