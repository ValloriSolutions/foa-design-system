import styled, { CSSObject } from 'styled-components';
import borders from '../../theme/borders';
import { palette } from '../../theme/colors';
import { fontSizes } from '../../theme/fonts';
import { pxToRem } from '../../utils/grid';

interface CustomStyledInputProps {
  messageError?: boolean | null;
  hasIcon?: boolean;
  customStyles?: CSSObject;
}

export const StyledInput = styled.input<CustomStyledInputProps>`
  caret-color: ${palette.colors.red};
  background-color: ${palette.colors.white};
  border-radius: ${borders.radius.input};
  width: 100%;
  height: ${pxToRem(48)};
  padding: ${pxToRem(15)} ${pxToRem(21)};
  border: solid 1.5px
    ${({ messageError }): string =>
      messageError ? palette.colors.red : palette.colors.gray.light};

  color: ${palette.text.secondary};
  font-size: ${fontSizes.input};

  ${({ hasIcon }): string => (hasIcon ? 'padding-right: 30px;' : '')}

  ${({ customStyles }): CSSObject => customStyles || {}}

	::placeholder {
    color: ${palette.colors.gray.medium};
  }

  :disabled {
    background-color: ${palette.colors.gray.lighter};
    cursor: not-allowed;
    &::placeholder {
      color: ${palette.text.disabled};
    }
  }
  &:focus {
    outline: none;
  }
`;
export const StyledChip = styled.span`
  border-radius: 100%;
  background-color: ${palette.colors.red};
  padding: 5px;
  font-size: 13px;
  color: white;
  position: absolute;
  right: 39px;
  top: 7px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  min-height: 62px;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const StyledIconContainer = styled.button<CustomStyledInputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${pxToRem(48)};
  position: absolute;
  right: 0;
  top: 0;
  width: 47px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  & > div {
    display: flex;
  }
`;

export const StyledWrapperError = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  svg {
    margin-right: 4px;
  }
`;
