import React from 'react';
import { FEMSABrand } from '../../..';
import MenuItems, { MenuItemProps } from './MenuItems';
import { StyledSidebar } from './styles';

export interface SidebarProps {
  menuItems: MenuItemProps[];
}

export const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <StyledSidebar>
      <FEMSABrand />
      <MenuItems menuItems={menuItems} />
    </StyledSidebar>
  );
};

export default Sidebar;
