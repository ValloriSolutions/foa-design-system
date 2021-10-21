import styled from 'styled-components';
import { palette } from '../../../theme/colors';
import { pxToRem } from '../../../utils/grid';

export const StyledSidebar = styled.aside`
  width: ${pxToRem(280)};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  background: ${palette.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  & > svg {
    margin-bottom: ${pxToRem(30)};
    margin-top: ${pxToRem(33)};
  }
`;
