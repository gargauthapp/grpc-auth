import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { ConsumerAuthSuccessful } from "./consumer/consumer_auth_successful_pb";
import type { ConsumerAuthFailure } from "./consumer/consumer_auth_failure_pb";
import type { Correlation } from "./correlation_pb";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gargauth/auth/v1/authenticate_consumer_response.proto.
 */
export declare const file_gargauth_auth_v1_authenticate_consumer_response: GenFile;
/**
 * @generated from message gargauth.auth.v1.AuthenticateConsumerResponse
 */
export type AuthenticateConsumerResponse = Message<"gargauth.auth.v1.AuthenticateConsumerResponse"> & {
    /**
     * @generated from field: gargauth.auth.v1.Correlation correlation = 1;
     */
    correlation?: Correlation;
    /**
     * @generated from oneof gargauth.auth.v1.AuthenticateConsumerResponse.result
     */
    result: {
        /**
         * @generated from field: gargauth.auth.v1.ConsumerAuthSuccessful success = 2;
         */
        value: ConsumerAuthSuccessful;
        case: "success";
    } | {
        /**
         * @generated from field: gargauth.auth.v1.ConsumerAuthFailure failure = 3;
         */
        value: ConsumerAuthFailure;
        case: "failure";
    } | {
        case: undefined;
        value?: undefined;
    };
};
/**
 * Describes the message gargauth.auth.v1.AuthenticateConsumerResponse.
 * Use `create(AuthenticateConsumerResponseSchema)` to create a new message.
 */
export declare const AuthenticateConsumerResponseSchema: GenMessage<AuthenticateConsumerResponse>;
