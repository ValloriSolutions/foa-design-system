import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import LayoutWrapper from '../src/components/Layout/';
import { Card, IconCredit, IconDashboard, IconTicket } from '../src';
import { UserRole } from '../src/types/entities';
import { LayoutProps } from '../src/types/layout';

export default {
  title: 'Layout/LayoutWrapper',
  component: LayoutWrapper,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Default: Story<LayoutProps> = () => {
  const [term, setTerm] = useState('');
  return (
    <LayoutWrapper
      menuItems={[
        {
          title: 'Página Inicial',
          onClick: () => alert('clicked!'),
          icon: <IconDashboard />,
        },
        {
          title: 'Tickets',
          onClick: () => alert('clicked!'),
          icon: <IconTicket />,
        },
        {
          title: 'Req. de Compra',
          active: true,
          onClick: () => alert('clicked!'),
          icon: <IconCredit />,
          dropdownItems: [
            {
              title: 'Sub Item 1',
              onClick: () => alert('clicked!'),
              active: true,
            },
            {
              title: 'Sub Item 2',
              onClick: () => alert('clicked!'),
            },
          ],
        },
      ]}
      searchTerm={term}
      onChange={(e): void => setTerm(e.target.value)}
      user={{
        name: 'Suellen Marques',
        avatar: 'https://avatars0.githubusercontent.com/u/1234?s=460&v=4',
        email: 'suellen.marques@femsa.com.br',
        role: UserRole.ADMIN,
      }}
      notifications={[
        {
          id: '1',
          title: 'Novo ticket',
          description: 'Novo ticket criado',
          icon: <IconTicket />,
          url: 'https://femsa.com.br',
        },
        {
          id: '2',
          title: 'Ticket Atualizado',
          description: 'Novo lote de canetas',
          icon: <IconTicket />,
          url: 'https://femsa.com.br',
        },
      ]}
      messages={[
        {
          id: '1',
          title: 'Novo ticket',
          description: 'Novo ticket criado',
          url: 'https://femsa.com.br',
        },
      ]}
    >
      <Card>
        <h1>Hello World</h1>
      </Card>
    </LayoutWrapper>
  );
};
