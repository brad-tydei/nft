// Generated from Payment.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Dismiss = {
};

export declare const Dismiss:
  damlTypes.Serializable<Dismiss> & {
  }
;


export declare type Receipt = {
  amount: damlTypes.Numeric;
  currency: string;
  from: damlTypes.Party;
  to: damlTypes.Party;
  reference: string;
  transactionId: string;
  received: damlTypes.Time;
};

export declare const Receipt:
  damlTypes.Template<Receipt, undefined, '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:Payment:Receipt'> & {
  Archive: damlTypes.Choice<Receipt, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  Dismiss: damlTypes.Choice<Receipt, Dismiss, {}, undefined>;
};

export declare namespace Receipt {
  export type CreateEvent = damlLedger.CreateEvent<Receipt, undefined, typeof Receipt.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Receipt, typeof Receipt.templateId>
  export type Event = damlLedger.Event<Receipt, undefined, typeof Receipt.templateId>
  export type QueryResult = damlLedger.QueryResult<Receipt, undefined, typeof Receipt.templateId>
}



export declare type Receive = {
  received: damlTypes.Time;
};

export declare const Receive:
  damlTypes.Serializable<Receive> & {
  }
;


export declare type PaymentClaim = {
  amount: damlTypes.Numeric;
  currency: string;
  from: damlTypes.Party;
  to: damlTypes.Party;
  reference: string;
  transactionId: string;
};

export declare const PaymentClaim:
  damlTypes.Template<PaymentClaim, undefined, '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:Payment:PaymentClaim'> & {
  Receive: damlTypes.Choice<PaymentClaim, Receive, damlTypes.ContractId<Receipt>, undefined>;
  Archive: damlTypes.Choice<PaymentClaim, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace PaymentClaim {
  export type CreateEvent = damlLedger.CreateEvent<PaymentClaim, undefined, typeof PaymentClaim.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PaymentClaim, typeof PaymentClaim.templateId>
  export type Event = damlLedger.Event<PaymentClaim, undefined, typeof PaymentClaim.templateId>
  export type QueryResult = damlLedger.QueryResult<PaymentClaim, undefined, typeof PaymentClaim.templateId>
}



export declare type ClaimPaid = {
  transactionId: string;
};

export declare const ClaimPaid:
  damlTypes.Serializable<ClaimPaid> & {
  }
;


export declare type Payable = {
  amount: damlTypes.Numeric;
  currency: string;
  from: damlTypes.Party;
  to: damlTypes.Party;
  reference: string;
};

export declare const Payable:
  damlTypes.Template<Payable, undefined, '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:Payment:Payable'> & {
  ClaimPaid: damlTypes.Choice<Payable, ClaimPaid, damlTypes.ContractId<PaymentClaim>, undefined>;
  Archive: damlTypes.Choice<Payable, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace Payable {
  export type CreateEvent = damlLedger.CreateEvent<Payable, undefined, typeof Payable.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Payable, typeof Payable.templateId>
  export type Event = damlLedger.Event<Payable, undefined, typeof Payable.templateId>
  export type QueryResult = damlLedger.QueryResult<Payable, undefined, typeof Payable.templateId>
}


