import React, { RefObject, useState } from 'react';
import { CSSObject } from 'styled-components';
import * as Icon from '../../icons/';

import { Typography } from '../Typography';

import {
  StyledChip,
  StyledContainer,
  StyledIconContainer,
  StyledInput,
  StyledWrapperError,
} from './styles';

export interface InputProps {
  id?: string;
  name?: string;
  label?: string;
  maxLength?: number;
  type?:
    | 'password'
    | 'Typography'
    | 'none'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
    | 'text'
    | undefined;
  value: string | string | number | readonly string[] | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: () => void;
  placeholder: string;
  disabled?: boolean;
  checked?: boolean;
  customIcon?: React.ReactNode;
  showIconPassword?: boolean;
  messageError?: string | null;
  inputError?: boolean | null;
  onClick?: () => void;
  forwardRef?: RefObject<HTMLDivElement>;
  readonly?: boolean;
  customInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  badge?: string | number;
  customStyles?: CSSObject;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'Typography',
  value,
  onChange,
  placeholder,
  maxLength,
  disabled = false,
  checked = false,
  customStyles,
  onIconClick,
  customIcon,
  messageError = null,
  showIconPassword = false,
  inputError = false,
  onClick,
  forwardRef,
  readonly,
  customInputProps,
  badge,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const hasIcon = checked || showIconPassword || customIcon;

  function handleShowPassword(): void {
    if (setShowPassword) setShowPassword(!showPassword);
  }

  function handleIconClick(): void {
    if (showIconPassword) {
      handleShowPassword();
    } else {
      if (onIconClick) onIconClick();
    }
  }

  function handleType(type: string): string {
    if (type === 'password' && showPassword) {
      return 'Typography';
    }

    if (type === 'password' && !showPassword) {
      return 'password';
    }

    return type;
  }

  return (
    <StyledContainer ref={forwardRef}>
      <StyledInput
        id={id}
        name={name}
        type={handleType(type)}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        messageError={!!messageError || inputError}
        customStyles={customStyles}
        onClick={onClick}
        readOnly={readonly}
        autoComplete="off"
        {...customInputProps}
      />

      {hasIcon && (
        <StyledIconContainer onClick={handleIconClick}>
          {showIconPassword && (
            <div>
              {showPassword ? <Icon.IconEyeHide /> : <Icon.IconEyeShow />}
            </div>
          )}
          {customIcon && customIcon}
        </StyledIconContainer>
      )}
      {badge ? <StyledChip>{badge}</StyledChip> : null}

      {messageError && (
        <StyledWrapperError>
          <Icon.IconWarning />
          <Typography as="small">{messageError}</Typography>
        </StyledWrapperError>
      )}
    </StyledContainer>
  );
};

export default Input;
