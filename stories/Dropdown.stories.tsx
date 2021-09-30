import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Dropdown,
  DropdownProps,
  DropdownItem,
} from '../src/components/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const ControlledThreeDots: Story<DropdownProps> = (): JSX.Element => {
  const [active, toggleActive] = useState(false);
  const handleToggle = (): void => {
    toggleActive(!active);
  };

  return (
    <Dropdown active={active} onClick={(): void => handleToggle()} threeDots>
      <DropdownItem onClick={(): void => alert('Gerar ordem')}>
        Gerar ordem
      </DropdownItem>
      <DropdownItem onClick={(): void => alert('Editar itens')}>
        Editar itens
      </DropdownItem>
      <DropdownItem onClick={(): void => alert('Cancelar Requisiçao')}>
        Cancelar Requisiçao
      </DropdownItem>
    </Dropdown>
  );
};

export const SelfControlled: Story<DropdownProps> = (): JSX.Element => {
  return (
    <Dropdown text="ações rápidas">
      <DropdownItem onClick={(): void => alert('Editando restaurante...')}>
        editar restaurantes
      </DropdownItem>
      <DropdownItem onClick={(): void => alert('Excluindo restaurante...')}>
        excluir restaurantes
      </DropdownItem>
    </Dropdown>
  );
};
