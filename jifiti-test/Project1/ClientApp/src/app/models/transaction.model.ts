export class Transaction {
  id?: number;
  amount?: string;
  transType: TransType = 1;
  cardId?: number;
  appId?: number;
  cardNo?: string;
  issuer?: string;
}

export enum TransType {
  AUTH = 1,
  COMMIT = 2,
  REFUND = 3
}

