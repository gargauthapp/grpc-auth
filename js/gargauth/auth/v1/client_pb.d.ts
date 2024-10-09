import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Correlation } from "./correlation_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gargauth/auth/v1/client.proto.
 */
export declare const file_gargauth_auth_v1_client: GenFile;
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
export declare const ClientSchema: GenMessage<Client>;
