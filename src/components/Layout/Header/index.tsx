import React from 'react';

import { IconSearch } from '../../../icons/Search';
import { palette } from '../../../theme/colors';
import { HeaderProps } from '../../../types/layout';
import { Col } from '../../Grid/Col';
import Input from '../../Input';
import { StyledHeader } from './styles';
import Toolbar from './Toolbar';

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onChange,
  notifications,
  messages,
  user,
}) => {
  return (
    <StyledHeader as="header">
      <Col size={5} customStyles={{ paddingTop: '1rem' }}>
        <Input
          noLabel
          placeholder="Digite o Número da Requisição"
          value={searchTerm}
          onChange={onChange}
          customIcon={<IconSearch color={palette.colors.gray.light} />}
        />
      </Col>
      <Col size={4} collapse="md" />
      <Col>
        <Toolbar
          messages={messages}
          notifications={notifications}
          user={user}
        />
      </Col>
    </StyledHeader>
  );
};

export default Header;
