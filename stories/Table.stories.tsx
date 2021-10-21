import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Dropdown,
  IconThreeDots,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '../src/';
import { TableProps } from '../src/types/layout';
import { DropdownItem } from '../src/components/Dropdown';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Default: Story<TableProps> = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell component="th" />
          <TableCell component="th" orderBy={'name'}>
            Restaurante
          </TableCell>
          <TableCell component="th" order={'DESC'} orderBy={'cnpj'}>
            CNPJ
          </TableCell>
          <TableCell component="th" order={'ASC'} orderBy={'city'}>
            Cidade
          </TableCell>
          <TableCell component="th">Originadores</TableCell>
          <TableCell component="th">Horário de funcionamento</TableCell>
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
          <TableCell>IFood, Uber Eats</TableCell>
          <TableCell>seg a sex, 09h às 15h; seg a sex, 09h às 15h;</TableCell>
          <TableCell>test</TableCell>
          <TableCell actionCell>
            <IconThreeDots />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell />
          <TableCell>LebonTon Lorem Ipsum</TableCell>
          <TableCell>87.871.377/0001-02</TableCell>
          <TableCell>Porto Alegre</TableCell>
          <TableCell>IFood, Uber Eats</TableCell>
          <TableCell>seg a sex, 09h às 15h; seg a sex, 09h às 15h;</TableCell>
          <TableCell>test</TableCell>
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
  );
};
