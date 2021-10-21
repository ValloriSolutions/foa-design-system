import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Row } from '../src/components/Grid/Row';
import { Default } from './Col.stories';
import Col from '../src/components/Grid/Col';
import { RowProps } from '../src';

export default {
  component: Row,
  subcomponents: { Col },
  title: 'Grid/Row',
} as Meta;

export const RowWithCols: Story<RowProps> = ({ ...args }): JSX.Element => (
  <Row {...args}>
    <Default />
  </Row>
);
