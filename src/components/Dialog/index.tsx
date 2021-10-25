import React, { useRef } from 'react';

import { useOutsideAlerter } from '../../hooks/useOutsideAlerter';
import { DialogProps } from '../../types/layout';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { StyledActions, StyledDialogBox, StyledOverlay } from './styles';

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  setOpen,
  info,
  width = '312px',
  disableBackdropClick,
  alignItems,
  customStyles,
  children,
}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(boxRef, () =>
    !disableBackdropClick ? isOpen && setOpen(false) : undefined
  );
  return (
    <StyledOverlay isOpen={isOpen} fullScreen>
      <StyledDialogBox
        ref={disableBackdropClick ? null : boxRef}
        width={width}
        alignItems={alignItems}
        customStyles={customStyles}
      >
        <div>
          <Typography as="h5">{info.title}</Typography>
          <Typography as="p">{info.subtitle}</Typography>
          {children}
        </div>
        <StyledActions>
          {info.cancelButton && (
            <Button
              small
              variant="secondary"
              onClick={(): void =>
                info.cancelButton?.action
                  ? info.cancelButton.action()
                  : setOpen(false)
              }
            >
              {info.cancelButton.title}
            </Button>
          )}
          <Button
            small
            onClick={(): void =>
              info.confirmButton?.action
                ? info.confirmButton.action()
                : setOpen(false)
            }
          >
            {info.confirmButton.title}
          </Button>
        </StyledActions>
      </StyledDialogBox>
    </StyledOverlay>
  );
};

export default Dialog;
