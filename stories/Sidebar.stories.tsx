import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Sidebar, SidebarProps } from '../src/components/Layout/Sidebar';
import { IconCalendar, IconCredit, IconDashboard, IconTicket } from '../src';

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Default: Story<SidebarProps> = () => {
  return (
    <Sidebar
      menuItems={[
        {
          title: 'Página Inicial',
          path: '/',
          icon: <IconDashboard />,
        },
        {
          title: 'Tickets',
          path: '/',
          icon: <IconTicket />,
        },
        {
          title: 'Req. de Compra',
          path: '/',
          icon: <IconCredit />,
          active: true,
        },
        {
          title: 'Dropdown',
          path: '/',
          icon: <IconCalendar />,
          isDropdown: true,
          dropdownItems: [
            {
              title: 'Sub Item 1',
              path: '/',
            },
            {
              title: 'Sub Item 2',
              path: '/',
            },
          ],
        },
      ]}
    />
  );
};
