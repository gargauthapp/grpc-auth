import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import type { ClientInitRequestSchema } from "./client_init_request_pb";
import type { ClientInitResponseSchema } from "./client_init_response_pb";
/**
 * Describes the file gargauth/auth/v1/init_client.proto.
 */
export declare const file_gargauth_auth_v1_init_client: GenFile;
/**
 * @generated from service gargauth.auth.v1.InitClientService
 */
export declare const InitClientService: GenService<{
    /**
     * @generated from rpc gargauth.auth.v1.InitClientService.authenticate
     */
    authenticate: {
        methodKind: "unary";
        input: typeof ClientInitRequestSchema;
        output: typeof ClientInitResponseSchema;
    };
}>;
