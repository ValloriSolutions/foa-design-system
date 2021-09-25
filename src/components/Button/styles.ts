import styled, { css } from 'styled-components';
import { borders, colors } from '../../theme';

import { ButtonProps } from './';

const StyledButton = styled.button<ButtonProps>`
  ${({ variant = 'primary' }) => css`
    background-color: ${colors.buttons[variant].background};
    color: ${colors.buttons[variant].color};
    border: ${colors.buttons[variant].border};
    `};
  border-radius: ${borders.radius.button};
`;

export default StyledButton;