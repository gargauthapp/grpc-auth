import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Correlation } from "./correlation_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gargauth/auth/v1/auth_request.proto.
 */
export declare const file_gargauth_auth_v1_auth_request: GenFile;
/**
 * @generated from message gargauth.auth.v1.AuthRequest
 */
export type AuthRequest = Message<"gargauth.auth.v1.AuthRequest"> & {
    /**
     * @generated from field: gargauth.auth.v1.Correlation correlation = 1;
     */
    correlation?: Correlation;
    /**
     * @generated from field: bytes key_id = 2;
     */
    keyId: Uint8Array;
    /**
     * @generated from field: bytes client_id = 3;
     */
    clientId: Uint8Array;
    /**
     * @generated from field: bytes public_key = 4;
     */
    publicKey: Uint8Array;
    /**
     * @generated from field: bytes payload = 5;
     */
    payload: Uint8Array;
};
/**
 * Describes the message gargauth.auth.v1.AuthRequest.
 * Use `create(AuthRequestSchema)` to create a new message.
 */
export declare const AuthRequestSchema: GenMessage<AuthRequest>;
