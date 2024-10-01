// @generated by protoc-gen-es v2.1.0
// @generated from file gargauth/auth/v1/authenticate_consumer.proto (package gargauth.auth.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import type { AuthRequestSchema } from "./auth_request_pb";
import type { AuthResponseSchema } from "./auth_response_pb";

/**
 * Describes the file gargauth/auth/v1/authenticate_consumer.proto.
 */
export declare const file_gargauth_auth_v1_authenticate_consumer: GenFile;

/**
 * @generated from service gargauth.auth.v1.AuthenticateConsumerService
 */
export declare const AuthenticateConsumerService: GenService<{
  /**
   * @generated from rpc gargauth.auth.v1.AuthenticateConsumerService.authenticate
   */
  authenticate: {
    methodKind: "unary";
    input: typeof AuthRequestSchema;
    output: typeof AuthResponseSchema;
  },
}>;

