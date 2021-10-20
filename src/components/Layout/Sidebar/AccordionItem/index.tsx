import React from 'react';
import { StyledAccordionItem } from './styles';

export interface AccordionItemProps {
  action?: () => void;
  disabled?: boolean;
  active?: boolean;
  label: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  label,
  action,
  disabled,
  active,
}) => (
  <StyledAccordionItem onClick={action} disabled={disabled} active={active}>
    {label}
  </StyledAccordionItem>
);
