import React from 'react';
import { StyledAccordionItem } from './styles';

interface Props {
  action?: () => void;
  disabled?: boolean;
  active?: boolean;
  label: string;
}

const AccordionItem: React.FC<Props> = ({
  label,
  action,
  disabled,
  active,
}) => (
  <StyledAccordionItem onClick={action} disabled={disabled} active={active}>
    {label}
  </StyledAccordionItem>
);

export default AccordionItem;
