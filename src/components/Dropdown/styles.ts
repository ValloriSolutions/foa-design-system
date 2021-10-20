import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { DropdownProps } from '../../types/layout';
import { borders } from '../../';
import colors, { box } from '../../theme/colors';
import { pxToRem } from '../../utils/grid';

export const StyledThreeDotsButton = styled.button<DropdownProps>`
  border: none;
  background: transparent;
  padding: 9px;
  cursor: pointer;
  ${({ disabled }): false | FlattenSimpleInterpolation | undefined =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
  ${({ customStyles }): CSSObject => customStyles || {}}
`;

export const StyledPopupActions = styled.div<DropdownProps>`
  display: none;
  position: absolute;
  top: calc(
    ${({ threeDots }): string => (threeDots ? pxToRem(24) : pxToRem(64))}
  );
  right: 0;
  border-radius: ${borders.radius.button};
  box-shadow: ${box.DEFAULT_BOX_SHADOW};
  background-color: ${colors.background.paper};
  white-space: nowrap;
  transition: all 0.3s ease;
  ${({ active }): false | FlattenSimpleInterpolation | undefined =>
    active &&
    css`
      display: block;
    `}
  z-index: 1000;
  max-height: calc(50vh - 100px);
  overflow-y: auto;
  ${({ customStyles }): CSSObject => customStyles || {}}
`;

export const StyledArrow = styled.svg<DropdownProps>`
  transition: transform 0.2s ease;
  margin-left: 8px;
  margin-top: 8px;
  width: 16px;
  ${({ active }): false | FlattenSimpleInterpolation | undefined =>
    active &&
    css`
      margin-top: -8px;
      transform: rotate(180deg);
    `}
`;
