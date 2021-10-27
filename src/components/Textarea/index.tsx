import React, { useCallback } from 'react';
import { css } from 'styled-components';

import { palette } from '../../theme/colors';
import { TextareaProps } from '../../types/layout';
import { StyledContainer } from '../Input/styles';
import { Typography } from '../Typography';
import { StyledTextarea } from './styles';

export const Textarea: React.FC<
  TextareaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({
  limit,
  value,
  onChange,
  messageError,
  label,
  id,
  disabled,
  ...props
}) => {
  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        if (limit) {
          event.target.value = event.target.value.substr(0, limit);
        }
        onChange(event);
      }
    },
    [limit, onChange]
  );

  return (
    <StyledContainer>
      {label ? (
        <Typography
          as="label"
          htmlFor={id}
          customStyles={css`
            color: ${disabled
              ? palette.colors.gray.light
              : palette.colors.gray.darker};
          `}
        >
          {label}
        </Typography>
      ) : null}
      <StyledTextarea
        {...props}
        value={value}
        onChange={onChangeHandler}
        error={Boolean(messageError)}
      />
      {(limit || messageError) && (
        <Typography
          as="small"
          customStyles={{
            color: messageError
              ? palette.colors.red
              : palette.colors.gray.light,
          }}
        >
          {messageError || `${value?.toString().length} / ${limit}`}
        </Typography>
      )}
    </StyledContainer>
  );
};
