import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gargauth/auth/v1/init/client_init_success.proto.
 */
export declare const file_gargauth_auth_v1_init_client_init_success: GenFile;
/**
 * @generated from message gargauth.auth.v1.ClientInitSuccess
 */
export type ClientInitSuccess = Message<"gargauth.auth.v1.ClientInitSuccess"> & {
    /**
     * @generated from field: bytes payload = 1;
     */
    payload: Uint8Array;
};
/**
 * Describes the message gargauth.auth.v1.ClientInitSuccess.
 * Use `create(ClientInitSuccessSchema)` to create a new message.
 */
export declare const ClientInitSuccessSchema: GenMessage<ClientInitSuccess>;
