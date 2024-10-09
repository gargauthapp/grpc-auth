import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Correlation } from "./correlation_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gargauth/auth/v1/client_init_response.proto.
 */
export declare const file_gargauth_auth_v1_client_init_response: GenFile;
/**
 * @generated from message gargauth.auth.v1.ClientInitResponse
 */
export type ClientInitResponse = Message<"gargauth.auth.v1.ClientInitResponse"> & {
    /**
     * @generated from field: gargauth.auth.v1.Correlation correlation = 1;
     */
    correlation?: Correlation;
};
/**
 * Describes the message gargauth.auth.v1.ClientInitResponse.
 * Use `create(ClientInitResponseSchema)` to create a new message.
 */
export declare const ClientInitResponseSchema: GenMessage<ClientInitResponse>;
