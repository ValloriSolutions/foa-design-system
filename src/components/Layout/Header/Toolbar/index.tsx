import React from 'react';

import { IconBell, IconMail } from '../../../../icons';
import {
  MessageProps,
  NotificationProps,
  UserProps,
} from '../../../../types/entities';
import { Avatar } from '../../../Avatar';
import { StyledToolbar, StyledUserBox } from './styles';

export interface ToolbarProps {
  messages?: MessageProps[];
  notifications?: NotificationProps[];
  user: UserProps;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  messages,
  notifications,
  user,
}) => {
  return (
    <StyledToolbar>
      {messages ? <IconMail badge /> : null}
      {notifications ? <IconBell badge /> : null}
      <StyledUserBox>
        <Avatar imageUrl={user.avatar} alt={user.name} />
        <div>
          <h6>{user.name}</h6>
          <p>{user.email}</p>
        </div>
      </StyledUserBox>
    </StyledToolbar>
  );
};

export default Toolbar;
