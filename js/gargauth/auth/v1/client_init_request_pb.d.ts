import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Client } from "./client_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gargauth/auth/v1/client_init_request.proto.
 */
export declare const file_gargauth_auth_v1_client_init_request: GenFile;
/**
 * @generated from message gargauth.auth.v1.ClientInitRequest
 */
export type ClientInitRequest = Message<"gargauth.auth.v1.ClientInitRequest"> & {
    /**
     * @generated from field: gargauth.auth.v1.Client client = 1;
     */
    client?: Client;
    /**
     * @generated from field: bytes payload = 2;
     */
    payload: Uint8Array;
};
/**
 * Describes the message gargauth.auth.v1.ClientInitRequest.
 * Use `create(ClientInitRequestSchema)` to create a new message.
 */
export declare const ClientInitRequestSchema: GenMessage<ClientInitRequest>;
