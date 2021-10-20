import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Sidebar, SidebarProps } from '../src/components/Layout/Sidebar';
import { IconCredit, IconDashboard, IconTicket } from '../src';

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
          active: true,
          path: '/',
          icon: <IconCredit />,
          dropdownItems: [
            {
              title: 'Sub Item 1',
              path: '/',
              active: true,
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
