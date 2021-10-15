import styled from 'styled-components';
import { palette } from '../../../theme/colors';
import { pxToRem } from '../../../utils/grid';

export const StyledSidebar = styled.div`
  width: ${pxToRem(320)};
  height: 100vh;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  background: ${palette.colors.white};

  & > svg {
    margin-bottom: ${pxToRem(62)};
    margin-top: ${pxToRem(33)};
  }
`;
