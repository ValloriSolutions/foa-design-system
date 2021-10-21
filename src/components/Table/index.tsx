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
    {topToolbar}
    <Card
      customStyles={css`
        border-radius: ${pxToRem(3)};
        ${tableDefaultPadding()};
        ${cardCustomStyles};
      `}
    >
      <StyledTable>{children}</StyledTable>
      {emptyComponent && emptyComponent({})}
    </Card>
    {bottomToolbar}
  </FlexBox>
);

export default Table;
