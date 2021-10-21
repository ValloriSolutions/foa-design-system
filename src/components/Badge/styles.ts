import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { pxToRem } from '../../utils/grid';

interface Props {
  color: string;
  bg: string;
  bordered?: boolean;
  customStyles?: CSSObject | FlattenSimpleInterpolation;
}

export const StyledBadge = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(3)} ${pxToRem(35)};
  border-radius: ${pxToRem(4)};
  width: auto;
  ${(props): FlattenSimpleInterpolation => css`
    & > span {
      font-size: ${pxToRem(13.2)};
      font-weight: 400;
      color: ${props.color};
    }
    background-color: ${props.bg};
    border: ${props.bordered ? `1px solid ${props.color}` : 'none'};
    ${props.customStyles || {}}
  `}
`;
