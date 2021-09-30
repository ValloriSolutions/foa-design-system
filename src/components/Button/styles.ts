import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { borders, colors, spacing } from '../../theme';
import { palette } from '../../theme/colors';
import { fontSizes } from '../../theme/fonts';
import { flexPosition } from '../../utils/mixins';

import { ButtonProps } from './';

export const StyledButton = styled.button<ButtonProps>`
  transition: all 0.2s ease-in-out;
  ${({ variant, disabled, dropdownItem }): FlattenSimpleInterpolation => {
    const style = disabled ? 'disabled' : variant ?? 'primary';
    return css`
      background-color: ${colors.buttons[style].background};
      color: ${colors.buttons[style].color};
      border: ${!dropdownItem ? colors.buttons[style].border : '0'};
      &:hover {
        background-color: ${colors.buttons[style].hover.background};
        color: ${colors.buttons[style].hover.color};
        border: ${!dropdownItem ? colors.buttons[style].hover.border : '0'};
        & svg,
        & svg path {
          fill: ${colors.buttons[style].hover.color};
        }
      }
      & svg,
      & svg path {
        fill: ${colors.buttons[style].color};
        max-height: 1.5rem;
      }
    `;
  }};

  width: ${({ size = 'fluid', buttonWidth }): string =>
    size === 'fluid' ? 'auto' : buttonWidth ? `${buttonWidth}px` : '100%'};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${borders.radius.button};
  padding: ${({ small }): string => (small ? '0.35rem 1rem' : spacing.button)};

  ${({ dropdownItem }): FlattenSimpleInterpolation | string => {
    return dropdownItem
      ? css`
          width: 100%;
          text-align: center;
          ${flexPosition('center', 'center')};
          border-radius: 0;
          border: 0;
          background: none;
          color: ${colors.text.secondary};
          &:not(:last-of-type) {
            border-bottom: 1px solid ${palette.colors.gray.lighter};
          }
        `
      : '';
  }}
`;

export const StyledGhostButton = styled.button<ButtonProps>`
  ${({ disabled, active }): FlattenSimpleInterpolation => css`
  font-size: ${fontSizes.small};
  text-decoration: underline;
  min-height: 10px;
  padding: 0 !important;
  background-color: transparent;
  color: ${disabled ? palette.text.disabled : palette.colors.red};
  text-decoration-color: ${
    disabled ? palette.text.disabled : palette.colors.red
  };
  &:hover {
    background-color: transparent;
    color: ${disabled ? palette.text.disabled : palette.text.secondary};
    text-decoration-color: ${
      disabled ? palette.text.disabled : palette.text.secondary
    };
  }
  ${
    active &&
    css`
      background-color: transparent;
      color: ${disabled ? palette.text.disabled : palette.colors.gray.darkest};
      text-decoration-color: ${disabled
        ? palette.text.disabled
        : palette.colors.gray.darkest};
    `
  }
  }
}`};
`;
