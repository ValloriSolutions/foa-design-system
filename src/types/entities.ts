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
  REQUISITION_SENT = 'Requisição Enviada', //enviado pro senior
  ORDER_SENT = 'Ordem Enviada', // enviado pro fornecedor
  ORDER_RECEIVED = 'Ordem Recebida',
  ORDER_CANCELED = 'Ordem Cancelada',
  ORDER_SOLVED = 'Ordem Concluída',
  ORDER_CLOSED = 'Ordem Fechada', //tipo PR/Mr fechada, serve pra consulta
  WAITING_CONTRACT = 'Aguardando Contrato',
  WAITING_PAYMENT = 'Aguardando Pagamento',
  PAUSED = 'Pausado',
  PENDING_APPROVAL = 'Aguardando Aprovação',
  SENIOR_APPROVED = 'Solicitação Aprovada',
  SENIOR_REPROVED = 'Solicitação Reprovada',
}

export enum UserRole {
  ADMIN = 'admin',
  OPERATOR = 'operator',
  SUPPLIER = 'supplier',
  SUPPORT = 'support',
  SENIOR = 'senior',
}

export enum OrderType {
  P = 'Padrão',
  SB = 'Subcontratação',
  CS = 'Consignação',
  TE = 'Transferencia de Estoque',
  SE = 'Serviço Externo',
}

export enum DeliveryPlace {
  DEPOSIT = 'Depósito',
  PLAN = 'Planta',
}
export interface CommonProps {
  id: string;
  notes: string;
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
  authorId: string;
  supplierName: string;
  opennedAt: Date;
  updatedAt: Date;
}

export interface NotificationProps extends ToolbarProps {
  icon?: React.ReactNode;
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
  center: string;
  purchaseGroup: string;
  mrp: string;
  phone: string;
}

export interface SupplierProps extends UserProps {
  idVendor: string;
}
/* ENTITIES ----------- */

export interface VendorProps {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  products: ProductsProps[];
}

export interface ProductsProps extends CommonProps {
  material: string;
  description: string;
  quantity: number;
  materialGroup: string;
  center: string;
  deposit: string;
  shipmentDate: string;
  requestDate: string;
  releaseDate: string;
  valuationPrice: number;
  idSupplier: string; // só pra relacionamento com a tabela de suppliers
  contactPerson: string;
  deliveryInfo: string;
}

/* ORDERS ----------- */
export interface OrderRequisitionProps extends CommonProps {
  type: OrderType;
  requisitionGoal: string;
  deliveryPlace: DeliveryPlace;
  requestedBy: string;
  purchaseOrganization: string; //todo: enum
  purchaseCenter: string; //todo: enum com endereço do centro pra mostrar no detalhe da requisição
  status: OrderStatus;
  productList: ProductsProps[];
  isApproved: boolean;
  seniorComment?: string;
  subtotal?: number;
  submittedToSenniorAt?: string;
  submittedToVendorAt?: string;
  openenedAt: string;
  refreshList?: boolean;
}
