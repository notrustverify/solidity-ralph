/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as AlphWalletContractJson } from "../AlphWallet.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace AlphWalletTypes {
  export type Fields = {
    owner: Address;
    balance: bigint;
  };

  export type State = ContractState<Fields>;

  export type ReceiveEvent = ContractEvent<{ from: Address; amount: bigint }>;
  export type WithdrawEvent = ContractEvent<{ to: Address; amount: bigint }>;

  export interface CallMethodTable {
    getBalance: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  AlphWalletInstance,
  AlphWalletTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as AlphWalletTypes.Fields;
  }

  eventIndex = { Receive: 0, Withdraw: 1 };
  consts = { ErrorCodes: { InvalidCaller: BigInt(0) } };

  at(address: string): AlphWalletInstance {
    return new AlphWalletInstance(address);
  }

  tests = {
    getBalance: async (
      params: Omit<
        TestContractParams<AlphWalletTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getBalance", params);
    },
    withdraw: async (
      params: TestContractParams<AlphWalletTypes.Fields, { amount: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "withdraw", params);
    },
    receive: async (
      params: TestContractParams<
        AlphWalletTypes.Fields,
        { address: Address; amount: bigint }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "receive", params);
    },
  };
}

// Use this object to test and deploy the contract
export const AlphWallet = new Factory(
  Contract.fromJson(
    AlphWalletContractJson,
    "",
    "c3e6294621556a7deb467cd8d4a57bdda1a636f611a72b33d2519f6de4436a81"
  )
);

// Use this class to interact with the blockchain
export class AlphWalletInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<AlphWalletTypes.State> {
    return fetchContractState(AlphWallet, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeReceiveEvent(
    options: EventSubscribeOptions<AlphWalletTypes.ReceiveEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      AlphWallet.contract,
      this,
      options,
      "Receive",
      fromCount
    );
  }

  subscribeWithdrawEvent(
    options: EventSubscribeOptions<AlphWalletTypes.WithdrawEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      AlphWallet.contract,
      this,
      options,
      "Withdraw",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      AlphWalletTypes.ReceiveEvent | AlphWalletTypes.WithdrawEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      AlphWallet.contract,
      this,
      options,
      fromCount
    );
  }

  methods = {
    getBalance: async (
      params?: AlphWalletTypes.CallMethodParams<"getBalance">
    ): Promise<AlphWalletTypes.CallMethodResult<"getBalance">> => {
      return callMethod(
        AlphWallet,
        this,
        "getBalance",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends AlphWalletTypes.MultiCallParams>(
    calls: Calls
  ): Promise<AlphWalletTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      AlphWallet,
      this,
      calls,
      getContractByCodeHash
    )) as AlphWalletTypes.MultiCallResults<Calls>;
  }
}
