import styled, { CSSObject } from 'styled-components';
import { spacing } from '../../theme';
import { flexPosition } from '../../utils/mixins';
import { FlexBoxProps } from './';

export const StyledFlexBox = styled.div<FlexBoxProps>`
  ${(props): string =>
    flexPosition(props.verticalAlign, props.horizontalAlign, props.direction)};
  ${(props): string => `
    ${props.fullWidth ? 'width: 100%;' : ''};
    ${props.fullHeight ? 'height: 100%;' : ''};
    ${props.fullScreen ? 'height: 100vh; width: 100vw' : ''};
  `};
  padding: ${spacing.flexBox};
  ${({ customStyles }): CSSObject => customStyles || {}}
`;
