import React, { useCallback, useRef, useState } from 'react';
import { CSSObject } from 'styled-components';

import * as Icons from '../../icons';
import { useOutsideAlerter } from '../../hooks/useOutsideAlerter';
import { StyledArrow, StyledPopupActions } from '../Dropdown/styles';

import Input from '../Input';

import { MenuItem } from './styles';
import { palette } from '../../theme/colors';

interface Options {
  id: number | string;
  name: string;
}

export interface SelectProps {
  disabled?: boolean;
  label: string;
  placeholder: string;
  value: number | string;
  setValue: (value: number | string) => void;
  options: Options[];
  messageError?: string;
  inputError?: boolean;
  name?: string;
  popupCustomStyles?: CSSObject;
  bgWhenSelected?: boolean;
  customStyles?: CSSObject;
}

export const Select: React.FC<SelectProps> = ({
  name,
  customStyles,
  disabled = false,
  label,
  placeholder,
  options,
  value,
  setValue,
  messageError,
  inputError,
  popupCustomStyles,
  bgWhenSelected,
}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = useCallback(() => {
    if (!disabled) {
      setIsActive(!isActive);
    }
  }, [isActive, disabled]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(dropdownRef, () => {
    if (isActive) toggleActive();
  });

  return (
    <div style={{ position: 'relative' }}>
      <Input
        inputError={inputError}
        messageError={messageError}
        forwardRef={dropdownRef}
        type="text"
        name={name}
        label={label}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          e.preventDefault()
        }
        onClick={toggleActive}
        value={
          value && options.length > 0
            ? options.filter((item: Options) => item.id === value)[0]?.name
            : ''
        }
        disabled={disabled}
        readonly
        placeholder={placeholder}
        customStyles={{
          background:
            bgWhenSelected && value ? palette.background.red : 'white',
          justifyContent: 'space-between',
          cursor: 'pointer',
          ...customStyles,
        }}
        customIcon={
          <StyledArrow
            active={isActive}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 16 16"
          >
            <Icons.IconChevronDown
              color={!disabled ? palette.colors.red : palette.text.disabled}
            />
          </StyledArrow>
        }
        onIconClick={toggleActive}
      />
      {!disabled && (
        <StyledPopupActions
          customStyles={{
            top: '3.1rem',
            ...popupCustomStyles,
          }}
          active={isActive}
          style={{ width: '100%' }}
        >
          {Object.keys(options).length > 0 &&
            options.map((item: Options, index: number) => (
              <MenuItem key={index} onClick={(): void => setValue(item.id)}>
                {item.name}
              </MenuItem>
            ))}
        </StyledPopupActions>
      )}
    </div>
  );
};

export default Select;