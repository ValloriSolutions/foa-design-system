import React, { useState } from 'react';
import { StyledMenuItem } from './styles';
import { useHistory } from 'react-router-dom';
import Accordion from '../Accordion';
import { AccordionItem } from '../AccordionItem';

export interface DropdownItemProps {
  title: string;
  path: string;
  active?: boolean;
}

export interface MenuItemProps {
  title: string;
  icon: React.ReactNode;
  path: string;
  isDropdown?: boolean;
  dropdownItems?: DropdownItemProps[];
  active?: boolean;
}

export interface MenuItemsProps {
  menuItems: MenuItemProps[];
}

export const MenuItems: React.FC<MenuItemsProps> = ({
  menuItems,
}): JSX.Element => {
  const history = useHistory();
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
                  action={(): void => history.push(dropdownItem.path)}
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
            onClick={(): void => history.push(menuItem.path)}
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
