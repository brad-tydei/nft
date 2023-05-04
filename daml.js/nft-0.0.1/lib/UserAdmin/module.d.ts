// Generated from UserAdmin.daml
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
import * as Token from '../Token/module';

export declare type RejectOwnerRequest = {
};

export declare const RejectOwnerRequest:
  damlTypes.Serializable<RejectOwnerRequest> & {
  }
;


export declare type GrantOwnerRights = {
};

export declare const GrantOwnerRights:
  damlTypes.Serializable<GrantOwnerRights> & {
  }
;


export declare type OwnerRequest = {
  userAdmin: damlTypes.Party;
  owner: damlTypes.Party;
  reason: string;
};

export declare const OwnerRequest:
  damlTypes.Template<OwnerRequest, undefined, '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:UserAdmin:OwnerRequest'> & {
  GrantOwnerRights: damlTypes.Choice<OwnerRequest, GrantOwnerRights, damlTypes.ContractId<Owner>, undefined>;
  Archive: damlTypes.Choice<OwnerRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  RejectOwnerRequest: damlTypes.Choice<OwnerRequest, RejectOwnerRequest, {}, undefined>;
};

export declare namespace OwnerRequest {
  export type CreateEvent = damlLedger.CreateEvent<OwnerRequest, undefined, typeof OwnerRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<OwnerRequest, typeof OwnerRequest.templateId>
  export type Event = damlLedger.Event<OwnerRequest, undefined, typeof OwnerRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<OwnerRequest, undefined, typeof OwnerRequest.templateId>
}



export declare type RevokeOwner = {
};

export declare const RevokeOwner:
  damlTypes.Serializable<RevokeOwner> & {
  }
;


export declare type AcceptTokenByKey = {
  issuer: damlTypes.Party;
  currentOwner: damlTypes.Party;
  description: string;
};

export declare const AcceptTokenByKey:
  damlTypes.Serializable<AcceptTokenByKey> & {
  }
;


export declare type AcceptTokenAsNewOwner = {
  offerId: damlTypes.ContractId<Token.TokenOffer>;
};

export declare const AcceptTokenAsNewOwner:
  damlTypes.Serializable<AcceptTokenAsNewOwner> & {
  }
;


export declare type Owner = {
  userAdmin: damlTypes.Party;
  owner: damlTypes.Party;
};

export declare const Owner:
  damlTypes.Template<Owner, undefined, '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:UserAdmin:Owner'> & {
  AcceptTokenAsNewOwner: damlTypes.Choice<Owner, AcceptTokenAsNewOwner, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<damlTypes.ContractId<Token.Token>, damlTypes.ContractId<Payment.Payable>, damlTypes.Optional<damlTypes.ContractId<Payment.Payable>>>, undefined>;
  AcceptTokenByKey: damlTypes.Choice<Owner, AcceptTokenByKey, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<damlTypes.ContractId<Token.Token>, damlTypes.ContractId<Payment.Payable>, damlTypes.Optional<damlTypes.ContractId<Payment.Payable>>>, undefined>;
  RevokeOwner: damlTypes.Choice<Owner, RevokeOwner, {}, undefined>;
  Archive: damlTypes.Choice<Owner, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace Owner {
  export type CreateEvent = damlLedger.CreateEvent<Owner, undefined, typeof Owner.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Owner, typeof Owner.templateId>
  export type Event = damlLedger.Event<Owner, undefined, typeof Owner.templateId>
  export type QueryResult = damlLedger.QueryResult<Owner, undefined, typeof Owner.templateId>
}



export declare type RejectIssuerRequest = {
};

export declare const RejectIssuerRequest:
  damlTypes.Serializable<RejectIssuerRequest> & {
  }
;


export declare type GrantIssuerRights = {
};

export declare const GrantIssuerRights:
  damlTypes.Serializable<GrantIssuerRights> & {
  }
;


export declare type IssuerRequest = {
  userAdmin: damlTypes.Party;
  issuer: damlTypes.Party;
  reason: string;
};

export declare const IssuerRequest:
  damlTypes.Template<IssuerRequest, undefined, '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:UserAdmin:IssuerRequest'> & {
  GrantIssuerRights: damlTypes.Choice<IssuerRequest, GrantIssuerRights, damlTypes.ContractId<Issuer>, undefined>;
  RejectIssuerRequest: damlTypes.Choice<IssuerRequest, RejectIssuerRequest, {}, undefined>;
  Archive: damlTypes.Choice<IssuerRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace IssuerRequest {
  export type CreateEvent = damlLedger.CreateEvent<IssuerRequest, undefined, typeof IssuerRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<IssuerRequest, typeof IssuerRequest.templateId>
  export type Event = damlLedger.Event<IssuerRequest, undefined, typeof IssuerRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<IssuerRequest, undefined, typeof IssuerRequest.templateId>
}



export declare type RevokeIssuer = {
};

export declare const RevokeIssuer:
  damlTypes.Serializable<RevokeIssuer> & {
  }
;


export declare type MintToken = {
  description: string;
  initialPrice: damlTypes.Numeric;
  currency: string;
  royaltyRate: damlTypes.Numeric;
};

export declare const MintToken:
  damlTypes.Serializable<MintToken> & {
  }
;


export declare type Issuer = {
  userAdmin: damlTypes.Party;
  issuer: damlTypes.Party;
};

export declare const Issuer:
  damlTypes.Template<Issuer, undefined, '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:UserAdmin:Issuer'> & {
  MintToken: damlTypes.Choice<Issuer, MintToken, damlTypes.ContractId<Token.Token>, undefined>;
  RevokeIssuer: damlTypes.Choice<Issuer, RevokeIssuer, {}, undefined>;
  Archive: damlTypes.Choice<Issuer, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace Issuer {
  export type CreateEvent = damlLedger.CreateEvent<Issuer, undefined, typeof Issuer.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Issuer, typeof Issuer.templateId>
  export type Event = damlLedger.Event<Issuer, undefined, typeof Issuer.templateId>
  export type QueryResult = damlLedger.QueryResult<Issuer, undefined, typeof Issuer.templateId>
}


