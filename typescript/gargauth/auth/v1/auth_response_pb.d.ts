// @generated by protoc-gen-es v2.1.0 with parameter "target=dts"
// @generated from file gargauth/auth/v1/auth_response.proto (package gargauth.auth.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Correlation } from "./correlation_pb";
import type { AuthSuccessful } from "./auth_successful_pb";
import type { AuthFailure } from "./auth_failure_pb";

/**
 * Describes the file gargauth/auth/v1/auth_response.proto.
 */
export declare const file_gargauth_auth_v1_auth_response: GenFile;

/**
 * @generated from message gargauth.auth.v1.AuthResponse
 */
export declare type AuthResponse = Message<"gargauth.auth.v1.AuthResponse"> & {
  /**
   * @generated from field: gargauth.auth.v1.Correlation correlation = 1;
   */
  correlation?: Correlation;

  /**
   * @generated from oneof gargauth.auth.v1.AuthResponse.result
   */
  result: {
    /**
     * @generated from field: gargauth.auth.v1.AuthSuccessful success = 2;
     */
    value: AuthSuccessful;
    case: "success";
  } | {
    /**
     * @generated from field: gargauth.auth.v1.AuthFailure failure = 3;
     */
    value: AuthFailure;
    case: "failure";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message gargauth.auth.v1.AuthResponse.
 * Use `create(AuthResponseSchema)` to create a new message.
 */
export declare const AuthResponseSchema: GenMessage<AuthResponse>;

