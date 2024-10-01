"use strict";
// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file gargauth/auth/v1/auth_response.proto (package gargauth.auth.v1, syntax proto3)
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResponseSchema = exports.file_gargauth_auth_v1_auth_response = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const auth_successful_pb_1 = require("./auth_successful_pb");
const auth_failure_pb_1 = require("./auth_failure_pb");
const correlation_pb_1 = require("./correlation_pb");
/**
 * Describes the file gargauth/auth/v1/auth_response.proto.
 */
exports.file_gargauth_auth_v1_auth_response = (0, codegenv1_1.fileDesc)("CiRnYXJnYXV0aC9hdXRoL3YxL2F1dGhfcmVzcG9uc2UucHJvdG8SEGdhcmdhdXRoLmF1dGgudjEiswEKDEF1dGhSZXNwb25zZRIyCgtjb3JyZWxhdGlvbhgBIAEoCzIdLmdhcmdhdXRoLmF1dGgudjEuQ29ycmVsYXRpb24SMwoHc3VjY2VzcxgCIAEoCzIgLmdhcmdhdXRoLmF1dGgudjEuQXV0aFN1Y2Nlc3NmdWxIABIwCgdmYWlsdXJlGAMgASgLMh0uZ2FyZ2F1dGguYXV0aC52MS5BdXRoRmFpbHVyZUgAQggKBnJlc3VsdEKLAQoUY29tLmdhcmdhdXRoLmF1dGgudjFCEUF1dGhSZXNwb25zZVByb3RvUAGiAgNHQViqAhBHYXJnYXV0aC5BdXRoLlYxygIQR2FyZ2F1dGhcQXV0aFxWMeICHEdhcmdhdXRoXEF1dGhcVjFcR1BCTWV0YWRhdGHqAhJHYXJnYXV0aDo6QXV0aDo6VjFiBnByb3RvMw", [auth_successful_pb_1.file_gargauth_auth_v1_auth_successful, auth_failure_pb_1.file_gargauth_auth_v1_auth_failure, correlation_pb_1.file_gargauth_auth_v1_correlation]);
/**
 * Describes the message gargauth.auth.v1.AuthResponse.
 * Use `create(AuthResponseSchema)` to create a new message.
 */
exports.AuthResponseSchema = (0, codegenv1_1.messageDesc)(exports.file_gargauth_auth_v1_auth_response, 0);
