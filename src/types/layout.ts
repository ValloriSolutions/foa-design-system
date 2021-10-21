import { ChangeEvent, ReactNode } from 'react';
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';
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
  noPadding?: boolean;
  customStyles?: CSSObject | FlattenSimpleInterpolation;
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
export interface TableProps {
  topToolbar?: React.ReactNode;
  bottomToolbar?: React.ReactNode;
  emptyComponent?: React.FC;
  cardCustomStyles?: CSSObject | FlattenSimpleInterpolation;
}
export interface BadgeProps extends StyledComponentProps {
  variant?: 'red' | 'gray' | 'gray_red' | 'green' | 'red_gray';
  label: string;
  bordered?: boolean;
}
export interface StyledComponentProps {
  customStyles?: CSSObject | FlattenSimpleInterpolation;
}

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'disabled';
  disabled?: boolean;
  onClick?: () => void;
  size?: 'fluid' | 'full';
  buttonWidth?: number;
  icon?: ReactNode;
  children?: ReactNode | string | undefined;
  small?: boolean;
  ghost?: boolean;
  active?: boolean;
  dropdownItem?: boolean;
  forwardRef?: React.Ref<HTMLButtonElement>;
  customStyles?: CSSObject | FlattenSimpleInterpolation;
  iconButton?: boolean;
}

export interface AvatarProps {
  size?: string;
  imageUrl?: string;
  alt?: string;
}

export interface Options {
  id: number | string;
  name: string;
}

export interface SelectProps {
  disabled?: boolean;
  label: string;
  placeholder: string;
  value: number | string;
  setValue: (value: number | string) => void;
  options: Options[];
  messageError?: string;
  inputError?: boolean;
  name?: string;
  popupCustomStyles?: CSSObject;
  bgWhenSelected?: boolean;
  customStyles?: CSSObject;
}
