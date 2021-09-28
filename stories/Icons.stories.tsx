import React from 'react';
import { Meta, Story } from '@storybook/react';
import * as Icons from '../src/icons';
import { IconProps } from '../src/icons/types';

export default {
  title: 'Components/Icons',
} as Meta;

export const Mail: Story<IconProps> = () => <Icons.IconMail />;
