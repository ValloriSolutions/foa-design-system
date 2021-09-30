import { FlexBoxProps } from '../';
import { Typography } from '../Typography';
import React, { useRef } from 'react';
import { useOutsideAlerter } from '../../hooks/useOutsideAlerter';
import { Button } from '../Button';
import { StyledOverlay, StyledDialogBox, StyledActions } from './styles';

export interface DialogProps extends FlexBoxProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  disableBackdropClick?: boolean;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  width?: string;
  info: {
    title: string;
    subtitle: string;
    cancelButton?: {
      title: string;
      action?: () => void;
    };
    confirmButton: {
      title: string;
      action?: () => void;
    };
  };
}
const Dialog: React.FC<DialogProps> = ({
  isOpen,
  setOpen,
  info,
  width = '312px',
  disableBackdropClick,
  alignItems,
  customStyles,
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
