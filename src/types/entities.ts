import React from 'react';

export enum TicketStatus {
  OPEN = 'open',
  SOLVED = 'solved',
  CANCELED = 'canceled',
  WAITING_S = 'waiting_for_supplier',
  WAITING_O = 'waiting_for_operator',
}
export enum OrderStatus {
  REQUISITION_CREATED = 'Requisição Criada',
  ORDER_CREATED = 'Ordem Criada',
  DRAFT = 'Rascunho',
  REQUISITION_SENT = 'Requisição Enviada',
  ORDER_SENT = 'Ordem Enviada',
  ORDER_RECEIVED = 'Ordem Recebida',
  ORDER_CANCELED = 'Ordem Cancelada',
  ORDER_SOLVED = 'Ordem Solucionada',
  ORDER_CLOSED = 'Ordem Fechada',
  WAITING_CONTRACT = 'Aguardando Contrato',
  WAITING_PAYMENT = 'Aguardando Pagamento',
  PAUSED = 'Pausado',
}

/* TICKET & NOTIFICATIONS ----------- */
export interface ToolbarProps {
  id: string;
  title: string;
  description: string;
  url: string;
}

export type AttachmentProps = Omit<ToolbarProps, 'description'>;

export interface MessageProps extends ToolbarProps {
  ticketId: string;
  when?: string;
  from?: string;
  attachments?: AttachmentProps[];
}

export interface TicketProps {
  id: string;
  title: string;
  orderNumber: number;
  subject: string;
  status: TicketStatus;
  operatorName: string;
  supplierName: string;
  opennedAt: Date;
  updatedAt: Date;
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
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
}

/* USERS ----------- */
export interface OperatorProps extends UserProps {
  createdAt: Date;
  updatedAt: Date;
  center: string;
}

export interface SupplierProps extends UserProps {
  role: UserRole.SUPPLIER;
  companyRole: string;
  companyDetails: CompanyProps[];
}
/* ENTITIES ----------- */
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
  material: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  createdAt: Date;
}
/* ORDERS ----------- */
export interface OrderRequisitionProps {
  id: string;
  openenedAt: string;
  dueDate: string;
  requestedBy: string;
  productList: ProductsProps[];
  center: string;
  status: OrderStatus;
  paymentType: string;
  refreshList?: boolean;
  submittedAt?: string;
  subtotal?: number;
}
