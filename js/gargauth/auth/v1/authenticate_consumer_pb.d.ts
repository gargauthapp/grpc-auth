import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import type { AuthenticateConsumerRequestSchema } from "./authenticate_consumer_request_pb";
import type { AuthenticateConsumerResponseSchema } from "./authenticate_consumer_response_pb";
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
        input: typeof AuthenticateConsumerRequestSchema;
        output: typeof AuthenticateConsumerResponseSchema;
    };
}>;
