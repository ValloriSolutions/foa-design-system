import React from 'react';
import { StyledMenu, StyledMenuItem } from './styles';
import { useHistory } from 'react-router-dom';

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

const Sidebar: React.FC<MenuItemsProps> = ({ menuItems }) => {
  const history = useHistory();
  return (
    <StyledMenu>
      {menuItems.map(
        ({ title, icon, path, isDropdown, dropdownItems, active }) => {
          if (isDropdown) {
            // @TODO: Implement dropdown
            return null;
          }

          return (
            <StyledMenuItem
              active={active}
              key={title}
              onClick={(): void => history.push(path)}
            >
              {icon}
              {title}
            </StyledMenuItem>
          );
        }
      )}
    </StyledMenu>
  );
};

export default Sidebar;
