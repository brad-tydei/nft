// Generated from Token.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Payment from '../Payment/module';

export declare type AcceptToken = {
};

export declare const AcceptToken:
  damlTypes.Serializable<AcceptToken> & {
  }
;


export declare type TokenOffer = {
  issuer: damlTypes.Party;
  owner: damlTypes.Party;
  description: string;
  userAdmin: damlTypes.Party;
  issued: damlTypes.Time;
  newOwner: damlTypes.Party;
  price: damlTypes.Numeric;
  lastPrice: damlTypes.Numeric;
  currency: string;
  royaltyRate: damlTypes.Numeric;
};

export declare const TokenOffer:
  damlTypes.Template<TokenOffer, TokenOffer.Key, '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:Token:TokenOffer'> & {
  AcceptToken: damlTypes.Choice<TokenOffer, AcceptToken, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<damlTypes.ContractId<Token>, damlTypes.ContractId<Payment.Payable>, damlTypes.Optional<damlTypes.ContractId<Payment.Payable>>>, TokenOffer.Key>;
  Archive: damlTypes.Choice<TokenOffer, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, TokenOffer.Key>;
};

export declare namespace TokenOffer {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<damlTypes.Party, damlTypes.Party, string>
  export type CreateEvent = damlLedger.CreateEvent<TokenOffer, TokenOffer.Key, typeof TokenOffer.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<TokenOffer, typeof TokenOffer.templateId>
  export type Event = damlLedger.Event<TokenOffer, TokenOffer.Key, typeof TokenOffer.templateId>
  export type QueryResult = damlLedger.QueryResult<TokenOffer, TokenOffer.Key, typeof TokenOffer.templateId>
}



export declare type Offer = {
  newOwner: damlTypes.Party;
  price: damlTypes.Numeric;
};

export declare const Offer:
  damlTypes.Serializable<Offer> & {
  }
;


export declare type Token = {
  issuer: damlTypes.Party;
  owner: damlTypes.Party;
  description: string;
  userAdmin: damlTypes.Party;
  issued: damlTypes.Time;
  lastPrice: damlTypes.Numeric;
  currency: string;
  royaltyRate: damlTypes.Numeric;
};

export declare const Token:
  damlTypes.Template<Token, undefined, '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:Token:Token'> & {
  Offer: damlTypes.Choice<Token, Offer, damlTypes.ContractId<TokenOffer>, undefined>;
  Archive: damlTypes.Choice<Token, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace Token {
  export type CreateEvent = damlLedger.CreateEvent<Token, undefined, typeof Token.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Token, typeof Token.templateId>
  export type Event = damlLedger.Event<Token, undefined, typeof Token.templateId>
  export type QueryResult = damlLedger.QueryResult<Token, undefined, typeof Token.templateId>
}


