import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { palette } from '../../../../theme/colors';
import { ActiveHoverStyles } from '../MenuItems/styles';

interface CustomProps {
  active?: boolean;
  disabled?: boolean;
}

export const StyledAccordionItem = styled.button<CustomProps>`
  background-color: ${palette.colors.white};
  color: ${palette.colors.gray.dark};
  font-family: PoppinsMedium;
  font-size: 8px;
  min-height: 24px;
  width: 100%;
  border: 0;
  padding-left: 56px;
  text-align: left;
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
  ${({ active }): FlattenSimpleInterpolation | false | undefined =>
    active && ActiveHoverStyles()}
  ${({ disabled }): FlattenSimpleInterpolation | false | undefined =>
    disabled &&
    css`
      color: ${palette.colors.gray.lighter};
    `}
&:hover {
    ${ActiveHoverStyles()}
  } ;
`;
