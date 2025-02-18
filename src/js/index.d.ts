/*
 * Copyright 2020 - MATTR Limited
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  BlsKeyPair,
  Bls12381ToBbsRequest,
  BbsKeyPair,
  BbsSignRequest,
  BlsBbsSignRequest,
  BbsVerifyRequest,
  BbsVerifyResult,
  BlsBbsVerifyRequest,
  BbsCreateProofRequest,
  BbsVerifyProofRequest,
  BbsBlindSignContextRequest,
  BlsBlindSignContextRequest,
  BbsBlindSignContext,
  BbsVerifyBlindSignContextRequest,
  BlsVerifyBlindSignContextRequest,
  BbsBlindSignRequest,
  BlsBlindSignRequest,
} from "./types";

export * from "./types";

export const BBS_SIGNATURE_LENGTH = 112;

export const DEFAULT_BLS12381_PRIVATE_KEY_LENGTH = 32;

export const DEFAULT_BLS12381_G1_PUBLIC_KEY_LENGTH = 48;

export const DEFAULT_BLS12381_G2_PUBLIC_KEY_LENGTH = 96;

export function generateBls12381G1KeyPair(
  seed?: Uint8Array
): Promise<Required<BlsKeyPair>>;

export function generateBls12381G2KeyPair(
  seed?: Uint8Array
): Promise<Required<BlsKeyPair>>;

export function bls12381toBbs(
  request: Bls12381ToBbsRequest
): Promise<BbsKeyPair>;

export function sign(request: BbsSignRequest): Promise<Uint8Array>;

export function blsSign(request: BlsBbsSignRequest): Promise<Uint8Array>;

export function verify(request: BbsVerifyRequest): Promise<BbsVerifyResult>;

export function blsVerify(
  request: BlsBbsVerifyRequest
): Promise<BbsVerifyResult>;

export function createProof(
  request: BbsCreateProofRequest
): Promise<Uint8Array>;

export function verifyProof(
  request: BbsVerifyProofRequest
): Promise<BbsVerifyResult>;

export function blsCreateProof(
  request: BbsCreateProofRequest
): Promise<Uint8Array>;

export function blsVerifyProof(
  request: BbsVerifyProofRequest
): Promise<BbsVerifyResult>;

export function commitmentForBlindSignRequest(
  request: BbsBlindSignContextRequest
): Promise<BbsBlindSignContext>;

export function blsCommitmentForBlindSignRequest(
  request: BlsBlindSignContextRequest
): Promise<BbsBlindSignContext>;

export function verifyBlindSignContext(
  request: BbsVerifyBlindSignContextRequest
): Promise<boolean>;

export function blsVerifyBlindSignContext(
  request: BlsVerifyBlindSignContextRequest
): Promise<boolean>;

export function blindSign(request: BbsBlindSignRequest): Promise<Uint8Array>;

export function blsBlindSign(request: BlsBlindSignRequest): Promise<Uint8Array>;

export function unblindSignature(
  blindSignature: Uint8Array,
  blindingFactor: Uint8Array
): Promise<Uint8Array>;
