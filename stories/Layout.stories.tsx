import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import {
  Badge,
  Dropdown,
  DropdownItem,
  IconCredit,
  IconDashboard,
  IconThreeDots,
  IconTicket,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '../src';
import LayoutWrapper from '../src/components/Layout/';
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
      searchPlaceholder="Search..."
      menuItems={[
        {
          title: 'Página Inicial',
          onClick: (): void => alert('clicked!'),
          icon: <IconDashboard />,
        },
        {
          title: 'Tickets',
          onClick: (): void => alert('clicked!'),
          icon: <IconTicket />,
          active: true,
        },
        {
          title: 'Req. de Compra',
          onClick: (): void => alert('clicked!'),
          icon: <IconCredit />,
          dropdownItems: [
            {
              title: 'Sub Item 1',
              onClick: (): void => alert('clicked!'),
            },
            {
              title: 'Sub Item 2',
              onClick: (): void => alert('clicked!'),
            },
          ],
        },
      ]}
      searchTerm={term}
      onChange={(e): void => setTerm(e.target.value)}
      user={{
        id: '1',
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
          ticketId: '1',
          title: 'Novo ticket',
          description: 'Novo ticket criado',
          url: 'https://femsa.com.br',
        },
      ]}
    >
      <Table
        topToolbar={
          <Typography as="h5" customStyles={{ margin: '30px 0 10px 0' }}>
            Tickets em aberto
          </Typography>
        }
      >
        <TableHead>
          <TableRow>
            <TableCell component="th" />
            <TableCell component="th" orderBy={'name'}>
              Fornecedor
            </TableCell>
            <TableCell component="th" order={'DESC'} orderBy={'cnpj'}>
              CNPJ
            </TableCell>
            <TableCell component="th" order={'ASC'} orderBy={'city'}>
              Cidade
            </TableCell>
            <TableCell component="th">Telefone</TableCell>
            <TableCell component="th">Email</TableCell>
            <TableCell component="th" orderBy={'status'}>
              Status
            </TableCell>
            <TableCell component="th">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>11 - 98459-8956</TableCell>
            <TableCell>leblonton@ind.com</TableCell>
            <TableCell>
              <Badge variant="green" label="Aprovado" />
            </TableCell>
            <TableCell actionCell>
              <IconThreeDots />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>LebonTon Lorem Ipsum</TableCell>
            <TableCell>87.871.377/0001-02</TableCell>
            <TableCell>Porto Alegre</TableCell>
            <TableCell>45 - 95896-8956</TableCell>
            <TableCell>email@example.com</TableCell>
            <TableCell>
              <Badge variant="red" label="Reprovado" />
            </TableCell>
            <TableCell actionCell>
              <Dropdown threeDots>
                <DropdownItem onClick={(): void => undefined}>
                  item 01
                </DropdownItem>
                <DropdownItem onClick={(): void => undefined}>
                  item 02
                </DropdownItem>
              </Dropdown>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </LayoutWrapper>
  );
};
