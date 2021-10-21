import React from 'react';
import { Col } from '../../Grid/Col';
import { IconSearch } from '../../../icons/Search';
import Input from '../../Input';
import { StyledHeader } from './styles';
import Toolbar from './Toolbar';
import { HeaderProps } from '../../../types/layout';
import { palette } from '../../../theme/colors';

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onChange,
  notifications,
  messages,
  user,
}) => {
  return (
    <StyledHeader>
      <Col size={5}>
        <Input
          placeholder="Digite o Número da Requisição"
          value={searchTerm}
          onChange={onChange}
          customIcon={<IconSearch color={palette.colors.gray.light} />}
        />
      </Col>
      <Col size={4} />
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