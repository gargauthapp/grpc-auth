import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gargauth/auth/v1/api_key.proto.
 */
export declare const file_gargauth_auth_v1_api_key: GenFile;
/**
 * @generated from message gargauth.auth.v1.ApiKey
 */
export type ApiKey = Message<"gargauth.auth.v1.ApiKey"> & {
    /**
     * @generated from field: bytes client = 1;
     */
    client: Uint8Array;
    /**
     * @generated from field: bytes key_id = 2;
     */
    keyId: Uint8Array;
    /**
     * @generated from field: bytes payload = 3;
     */
    payload: Uint8Array;
    /**
     * @generated from field: bytes signature = 4;
     */
    signature: Uint8Array;
};
/**
 * Describes the message gargauth.auth.v1.ApiKey.
 * Use `create(ApiKeySchema)` to create a new message.
 */
export declare const ApiKeySchema: GenMessage<ApiKey>;
