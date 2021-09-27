import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { borders, colors } from '../../theme';

import { ButtonProps } from './';

export const StyledButton = styled.button<ButtonProps>`
  transition: all 0.2s ease-in-out;
  ${({ variant, disabled }): FlattenSimpleInterpolation => {
    const style = disabled ? 'disabled' : 'primary' ?? variant;
    return css`
      background-color: ${colors.buttons[style].background};
      color: ${colors.buttons[style].color};
      border: ${colors.buttons[style].border};
      &:hover {
        background-color: ${colors.buttons[style].hover.background};
        color: ${colors.buttons[style].hover.color};
        border: ${colors.buttons[style].hover.border};
      }
      & svg {
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
  padding: 13px 22px;
`;
