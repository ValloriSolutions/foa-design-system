import React from 'react';
import { LayoutProps } from '../../types/layout';
import { Header } from './Header';
import Sidebar from './Sidebar';
import { StyledLayout } from './styles';

export const LayoutWrapper: React.FC<LayoutProps> = ({
  menuItems,
  searchTerm,
  onChange,
  notifications,
  messages,
  user,
  children,
}) => (
  <>
    <Header
      searchTerm={searchTerm}
      onChange={onChange}
      user={user}
      messages={messages}
      notifications={notifications}
    />
    <Sidebar menuItems={menuItems} />
    <StyledLayout>{children}</StyledLayout>
  </>
);

export default LayoutWrapper;
