import React, { useCallback, useState } from 'react';
import { ChevronDown } from 'react-feather';
import { StyledMenuItem } from '../MenuItems/styles';

import { LabelContainer, Label, Arrow, ContentContainer } from './styles';

export interface AccordionProps {
  isExpanded?: boolean;
  active?: boolean;
  disabled?: boolean;
  label: string;
  icon: React.ReactNode;
  onClick?: React.DOMAttributes<HTMLLIElement>['onClick'];
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  active,
  isExpanded,
  disabled,
  label,
  icon,
  onClick,
  children,
}): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      if (!isExpanded && onClick) {
        onClick(event);
        if (!expanded) {
          setExpanded(true);
        }
      } else {
        setExpanded((state) => !state);
      }
    },
    [isExpanded, onClick, expanded]
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
      <StyledMenuItem active={active} onClick={handleClick}>
        <LabelContainer>
          {icon}
          <Label hasIcon={!!icon} disabled={disabled}>
            {label}
          </Label>
        </LabelContainer>
        <Arrow
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          expanded={expanded}
          onClick={toggleExpanded}
        >
          <ChevronDown />
        </Arrow>
      </StyledMenuItem>
      <ContentContainer expanded={expanded}>{children}</ContentContainer>
    </>
  );
};

export default Accordion;
