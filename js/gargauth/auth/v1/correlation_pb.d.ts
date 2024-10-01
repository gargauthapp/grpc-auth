import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gargauth/auth/v1/correlation.proto.
 */
export declare const file_gargauth_auth_v1_correlation: GenFile;
/**
 * @generated from message gargauth.auth.v1.Correlation
 */
export type Correlation = Message<"gargauth.auth.v1.Correlation"> & {
    /**
     * @generated from field: bytes uid = 1;
     */
    uid: Uint8Array;
};
/**
 * Describes the message gargauth.auth.v1.Correlation.
 * Use `create(CorrelationSchema)` to create a new message.
 */
export declare const CorrelationSchema: GenMessage<Correlation>;
