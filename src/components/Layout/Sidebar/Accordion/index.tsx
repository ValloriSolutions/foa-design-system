import React, { useCallback, useState } from 'react';
import { ArrowUp } from 'react-feather';
import { palette } from '../../../../theme/colors';
import { StyledMenuItem } from '../MenuItems/styles';

import { LabelContainer, Label, Arrow, ContentContainer } from './styles';

interface Props {
  active?: boolean;
  disabled?: boolean;
  label: string;
  icon?: (color: string) => React.ReactNode;
  onClick?: React.DOMAttributes<HTMLButtonElement>['onClick'];
  single?: boolean;
  children: React.ReactNode;
}

const Accordion = ({
  active,
  disabled,
  label,
  icon,
  onClick,
  single,
  children,
}: Props): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const [hover, setHover] = useState(false);

  const getIconColor: () => string = () =>
    active || hover ? palette.colors.red : palette.colors.gray.dark;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!active && onClick) {
        onClick(event);
        if (!expanded) {
          setExpanded(true);
        }
      } else {
        setExpanded((state) => !state);
      }
    },
    [active, onClick, expanded]
  );

  const toggleExpanded = useCallback(
    (e: React.MouseEvent<HTMLOrSVGElement, MouseEvent>) => {
      setExpanded((state) => !state);
      e.stopPropagation();
    },
    [setExpanded]
  );

  return (
    <>
      <StyledMenuItem
        as="button"
        active={active}
        onClick={handleClick}
        onMouseEnter={(): void => setHover(true)}
        onMouseLeave={(): void => setHover(false)}
        disabled={disabled}
      >
        <LabelContainer>
          {icon?.(getIconColor())}
          <Label hasIcon={!!icon} disabled={disabled}>
            {label}
          </Label>
        </LabelContainer>
        {!single && (
          <Arrow
            expanded={expanded}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            onClick={toggleExpanded}
          >
            <ArrowUp
              color={
                disabled || hover
                  ? palette.colors.gray.dark
                  : palette.colors.red
              }
            />
          </Arrow>
        )}
      </StyledMenuItem>
      <ContentContainer expanded={expanded}>{children}</ContentContainer>
    </>
  );
};

export default Accordion;
