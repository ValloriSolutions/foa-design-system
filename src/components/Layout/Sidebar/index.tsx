import React from 'react';

import { FEMSABrand } from '../../../icons/FEMSABrand';
import { MenuItemsProps } from '../../../types/layout';
import MenuItems from './MenuItems';
import { StyledSidebar } from './styles';

export const Sidebar: React.FC<MenuItemsProps> = ({ menuItems }) => {
  return (
    <StyledSidebar>
      <FEMSABrand />
      <MenuItems menuItems={menuItems} />
    </StyledSidebar>
  );
};

export default Sidebar;
