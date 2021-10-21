import React from 'react';
import { css } from 'styled-components';

import { IconArrowDownOrder, IconArrowUpOrder } from '../../../icons';
import { StyledComponentProps } from '../../../types/layout';
import { Button } from '../../Button';
import { Typography } from '../../Typography';
import { StyledTableCellTd, StyledTableCellTh } from './styles';

interface Props extends StyledComponentProps {
  component?: 'th' | 'td';
  align?: 'center' | 'left' | 'right';
  checkbox?: React.ReactNode;
  order?: 'ASC' | 'DESC';
  orderBy?: string;
  orderByCb?: (key: string) => void;
  width?: string;
  actionCell?: boolean;
  colSpan?: number;
}

export const TableCell: React.FC<Props> = ({
  children,
  component = 'td',
  checkbox,
  order,
  orderBy = '',
  orderByCb = (): null => null,
  width,
  actionCell,
  colSpan,
}) => {
  const componentsMap = {
    td: StyledTableCellTd,
    th: StyledTableCellTh,
  };
  const SelectedTableCell = componentsMap[component];

  const renderOrderDirection = (
    orderDirection: typeof order,
    action: () => void
  ): JSX.Element => {
    // desc \/ | asc /\
    const customStyle = css`
      padding: 4px 8px;
    `;
    return (
      <Button
        onClick={(): void => action()}
        iconButton
        ghost
        customStyles={customStyle}
      >
        <span
          style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}
        >
          <IconArrowUpOrder
            visibility={orderDirection === 'DESC' ? 'hidden' : 'visible'}
          />
          <IconArrowDownOrder
            visibility={orderDirection === 'ASC' ? 'hidden' : 'visible'}
          />
        </span>
      </Button>
    );
  };

  return (
    <SelectedTableCell width={width} actionCell={actionCell} colSpan={colSpan}>
      {checkbox}
      {children && (
        <div
          style={{
            display: 'flex',
            flexDirection: component === 'th' ? 'row' : 'column',
            justifyContent: component === 'th' ? 'flex-start' : 'center',
            alignItems: component === 'th' ? 'center' : 'flex-start',
          }}
        >
          {children}
          {orderBy && renderOrderDirection(order, () => orderByCb(orderBy))}
        </div>
      )}
    </SelectedTableCell>
  );
};

export default TableCell;
