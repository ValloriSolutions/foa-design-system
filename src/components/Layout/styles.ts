import styled from 'styled-components';
import { palette } from '../../theme/colors';
import { pxToRem } from '../../utils/grid';

export const StyledLayout = styled.main`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${palette.background.paper};
  padding-left: ${pxToRem(280 + 30)};
  padding-top: ${pxToRem(110)};
  margin: 0;
`;
