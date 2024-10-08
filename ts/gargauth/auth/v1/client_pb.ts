// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file gargauth/auth/v1/client.proto (package gargauth.auth.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Correlation } from "./correlation_pb";
import { file_gargauth_auth_v1_correlation } from "./correlation_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file gargauth/auth/v1/client.proto.
 */
export const file_gargauth_auth_v1_client: GenFile = /*@__PURE__*/
  fileDesc("Ch1nYXJnYXV0aC9hdXRoL3YxL2NsaWVudC5wcm90bxIQZ2FyZ2F1dGguYXV0aC52MSJlCgZDbGllbnQSCwoDdWlkGAEgASgMEgoKAml2GAIgASgMEg4KBnNlY3JldBgDIAEoDBIyCgtjb3JyZWxhdGlvbhgEIAEoCzIdLmdhcmdhdXRoLmF1dGgudjEuQ29ycmVsYXRpb25ChQEKFGNvbS5nYXJnYXV0aC5hdXRoLnYxQgtDbGllbnRQcm90b1ABogIDR0FYqgIQR2FyZ2F1dGguQXV0aC5WMcoCEEdhcmdhdXRoXEF1dGhcVjHiAhxHYXJnYXV0aFxBdXRoXFYxXEdQQk1ldGFkYXRh6gISR2FyZ2F1dGg6OkF1dGg6OlYxYgZwcm90bzM", [file_gargauth_auth_v1_correlation]);

/**
 * @generated from message gargauth.auth.v1.Client
 */
export type Client = Message<"gargauth.auth.v1.Client"> & {
  /**
   * @generated from field: bytes uid = 1;
   */
  uid: Uint8Array;

  /**
   * @generated from field: bytes iv = 2;
   */
  iv: Uint8Array;

  /**
   * @generated from field: bytes secret = 3;
   */
  secret: Uint8Array;

  /**
   * @generated from field: gargauth.auth.v1.Correlation correlation = 4;
   */
  correlation?: Correlation;
};

/**
 * Describes the message gargauth.auth.v1.Client.
 * Use `create(ClientSchema)` to create a new message.
 */
export const ClientSchema: GenMessage<Client> = /*@__PURE__*/
  messageDesc(file_gargauth_auth_v1_client, 0);

