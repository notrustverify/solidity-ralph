/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  ExecutableScript,
  ExecuteScriptParams,
  ExecuteScriptResult,
  Script,
  SignerProvider,
  HexString,
} from "@alephium/web3";
import { default as ReceiveScriptJson } from "../Receive.ral.json";
import { default as WithdrawScriptJson } from "../Withdraw.ral.json";

export const Receive = new ExecutableScript<{
  alphWallet: HexString;
  address: Address;
  amount: bigint;
}>(Script.fromJson(ReceiveScriptJson));
export const Withdraw = new ExecutableScript<{
  alphWallet: HexString;
  amount: bigint;
}>(Script.fromJson(WithdrawScriptJson));