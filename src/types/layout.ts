import { ChangeEvent, ReactNode } from 'react';
import { CSSObject } from 'styled-components';
import { breakpointsType } from '../utils/grid';
import { NotificationProps, MessageProps, UserProps } from './entities';

export interface DropdownItemProps {
  title: string;
  onClick: () => void;
  active?: boolean;
}

export interface MenuItemProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  isDropdown?: boolean;
  dropdownItems?: DropdownItemProps[];
  active?: boolean;
}

export interface MenuItemsProps {
  menuItems: MenuItemProps[];
}

export interface HeaderProps {
  searchTerm?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  notifications?: NotificationProps[];
  messages?: MessageProps[];
  user: UserProps;
}

export type LayoutProps = MenuItemsProps & HeaderProps;

export interface AccordionProps {
  isExpanded?: boolean;
  active?: boolean;
  disabled?: boolean;
  label: string;
  icon: React.ReactNode;
  onClick?: React.DOMAttributes<HTMLLIElement>['onClick'];
  children: React.ReactNode;
}

export interface DropdownProps {
  text?: string;
  active?: boolean;
  onClick?: () => void;
  threeDots?: boolean;
  disabled?: boolean;
  customStyles?: CSSObject;
}

export type ColProps = {
  children?: ReactNode;
  collapse?: keyof breakpointsType;
  size?: number;
  customStyles?: CSSObject;
};

export type RowProps = {
  children: ReactNode;
  fluid?: boolean;
  customStyles?: CSSObject;
};

export interface FlexBoxProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  isCard?: boolean;
  verticalAlign?: 'center' | 'flex-start' | 'flex-end' | false;
  horizontalAlign?: 'center' | 'flex-start' | 'flex-end' | false;
  direction?: 'row' | 'column';
  fullWidth?: boolean;
  fullHeight?: boolean;
  fullScreen?: boolean;
  customStyles?: CSSObject;
}

export interface CardProps extends FlexBoxProps {
  noRound?: boolean;
  bordered?: boolean;
  noShadow?: boolean;
}
export interface AccordionItemProps {
  action?: () => void;
  disabled?: boolean;
  active?: boolean;
  label: string;
}
