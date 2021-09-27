import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Row, RowProps } from '../src/components/Grid/Row';
import { Default } from './Col.stories';
import Col from '../src/components/Grid/Col';

export default {
  component: Row,
  subcomponents: { Col },
  title: 'Layout/Row',
} as Meta;

export const RowWithCols: Story<RowProps> = ({
  children,
  ...args
}): JSX.Element => (
  <Row {...args}>
    <Default />
  </Row>
);
