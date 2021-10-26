/* eslint-disable @typescript-eslint/no-explicit-any */
import cookie from 'js-cookie';
import React, { useState } from 'react';

import { LayoutWrapperProps } from '../../types/layout';
import { Header } from './Header';
import Sidebar from './Sidebar';
import { StyledLayout } from './styles';

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  menuItems,
  searchTerm,
  onChange,
  notifications,
  messages,
  user,
  children,
  searchPlaceholder,
}) => {
  const [collapsed, setCollapsed] = useState<any>(cookie.get('miniSidebar'));

  const expandSidebar = (): void => {
    cookie.remove('miniSidebar');
    setCollapsed(false);
  };
  const collapseSidebar = (): void => {
    cookie.set('miniSidebar', 'true', { expires: 365 });
    setCollapsed(true);
  };

  const handleSidebar = (): void => {
    cookie.get('miniSidebar') ? expandSidebar() : collapseSidebar();
  };

  return (
    <>
      <Header
        searchPlaceholder={searchPlaceholder}
        searchTerm={searchTerm}
        onChange={onChange}
        user={user}
        messages={messages}
        notifications={notifications}
      />
      <Sidebar
        menuItems={menuItems}
        collapsed={collapsed}
        setCollapsed={handleSidebar}
      />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
};

export default LayoutWrapper;
