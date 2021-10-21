import React, { useState } from 'react';
import { StyledMenuItem } from './styles';
import Accordion from '../Accordion';
import { AccordionItem } from '../AccordionItem';
import { MenuItemsProps } from '../../../../types/layout';

export const MenuItems: React.FC<MenuItemsProps> = ({
  menuItems,
}): JSX.Element => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleClick = (selected: number) => (): void => {
    setActiveAccordion(selected);
  };
  return (
    <>
      {menuItems.map((menuItem, index) => {
        if (menuItem.dropdownItems && menuItem.dropdownItems?.length > 0) {
          return (
            <Accordion
              key={index}
              isExpanded={activeAccordion === index}
              active={menuItem.active}
              onClick={handleClick(index)}
              label={menuItem.title}
              icon={menuItem.icon}
            >
              {menuItem?.dropdownItems?.map((dropdownItem, index) => (
                <AccordionItem
                  active={dropdownItem.active}
                  label={dropdownItem.title}
                  key={index}
                  action={dropdownItem.onClick}
                >
                  {dropdownItem.title}
                </AccordionItem>
              ))}
            </Accordion>
          );
        }
        return (
          <StyledMenuItem
            active={menuItem.active}
            key={index}
            onClick={menuItem.onClick}
          >
            {menuItem.icon}
            {menuItem.title}
          </StyledMenuItem>
        );
      })}
    </>
  );
};

export default MenuItems;
