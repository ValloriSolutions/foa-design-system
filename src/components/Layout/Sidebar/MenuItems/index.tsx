import React, { useState } from 'react';
import { StyledMenu, StyledMenuItem } from './styles';
import { useHistory } from 'react-router-dom';
import { Home } from 'react-feather';
import Accordion from '../Accordion';
import AccordionItem from '../AccordionItem';

export interface DropdownItemProps {
  title: string;
  path: string;
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

const MenuItems: React.FC<MenuItemsProps> = ({ menuItems }): JSX.Element => {
  const history = useHistory();
  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleClick = (selected: number) => (): void => {
    setActiveAccordion(selected);
  };
  return (
    <>
      {menuItems.map(
        ({ title, icon, path, isDropdown, dropdownItems, active }) => {
          isDropdown ? (
            <Accordion
              label="Accordion 1"
              active={activeAccordion === 0}
              icon={(color): React.ReactNode => <Home color={color} />}
              onClick={handleClick(1)}
            >
              {dropdownItems?.map((e: DropdownItemProps, index) => (
                <AccordionItem
                  key={index}
                  label={e.title}
                  action={(): void => history.push(e.path)}
                />
              ))}
            </Accordion>
          ) : (
            <StyledMenu>
              <StyledMenuItem
                active={active}
                key={title}
                onClick={(): void => history.push(path)}
              >
                {icon}
                {title}
              </StyledMenuItem>
            </StyledMenu>
          );
        }
      )}
    </>
  );
};

export default MenuItems;
