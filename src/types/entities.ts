import React from 'react';

export enum OrderStatus {
  OPEN = 'open',
  SOLVED = 'solved',
  CANCELED = 'canceled',
  WAITING_F = 'waiting_for_supplier',
  WAITING_O = 'waiting_for_operator',
}

export interface ToolbarProps {
  id: string;
  title: string;
  description: string;
  url: string;
}

export type AttachmentProps = Omit<ToolbarProps, 'description'>;

export interface MessageProps extends ToolbarProps {
  when?: string;
  from?: string;
  attachments?: AttachmentProps[];
}

export interface TicketProps {
  id: string;
  title: string;
  orderNumber: number;
  subject: string;
  status: OrderStatus;
  operatorName: string;
  providerID: string;
  opennedAt: Date;
  updatedAt: Date;
  messages: MessageProps[];
}

export interface NotificationProps extends ToolbarProps {
  icon?: React.ReactNode;
}

export enum UserRole {
  ADMIN = 'admin',
  OPERATOR = 'operator',
  SUPPLIER = 'supplier',
  SUPPORT = 'support',
}

export interface UserProps {
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
}

export interface OperatorProps extends UserProps {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  center: string;
}

export interface SupplierProps extends UserProps {
  id: string;
  companyName: string;
  companyRole: string;
  companyDetails: CompanyProps[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CompanyProps {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  products: ProductsProps[];
}

export interface ProductsProps {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}
