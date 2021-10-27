import styled, {
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { borders } from '../../theme';
import { palette } from '../../theme/colors';
import { StyledComponentProps } from '../../types/layout';

interface CustomProps extends StyledComponentProps {
  error?: boolean;
}

export const StyledTextarea = styled.textarea<
  CustomProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
>`
  padding: 8px;
  border-radius: ${borders.radius.input};
  border: solid 1.5px
    ${({ error }): string =>
      error ? palette.colors.red : palette.colors.gray.medium};
  resize: none;

  ${(props): CSSObject | FlattenSimpleInterpolation => props.customStyles || {}}
`;
