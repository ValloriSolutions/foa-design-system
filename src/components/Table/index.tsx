import React from 'react';
import { css } from 'styled-components';
import { FlexBox } from '../FlexBox';
import { tableDefaultPadding } from '../../theme';
import { pxToRem } from '../../utils/grid';
import { TableProps } from '../../types/layout';

import { Card } from '../Card';

import { StyledTable } from './styles';

export const Table: React.FC<TableProps> = ({
  children,
  topToolbar,
  bottomToolbar,
  emptyComponent,
  cardCustomStyles,
}) => (
  <FlexBox>
    <Card
      customStyles={css`
        border-radius: ${pxToRem(3)};
        align-items: flex-start;
        ${tableDefaultPadding()};
        ${cardCustomStyles};
      `}
    >
      {topToolbar}
      <StyledTable>{children}</StyledTable>
      {emptyComponent && emptyComponent({})}
    </Card>
    {bottomToolbar}
  </FlexBox>
);

export default Table;
