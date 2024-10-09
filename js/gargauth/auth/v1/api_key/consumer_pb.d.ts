import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file gargauth/auth/v1/api_key/consumer.proto.
 */
export declare const file_gargauth_auth_v1_api_key_consumer: GenFile;
/**
 * @generated from message gargauth.auth.v1.Consumer
 */
export type Consumer = Message<"gargauth.auth.v1.Consumer"> & {
    /**
     * @generated from field: bytes uid = 1;
     */
    uid: Uint8Array;
    /**
     * @generated from field: google.protobuf.Timestamp issued = 2;
     */
    issued?: Timestamp;
    /**
     * @generated from field: optional google.protobuf.Timestamp expiry = 3;
     */
    expiry?: Timestamp;
};
/**
 * Describes the message gargauth.auth.v1.Consumer.
 * Use `create(ConsumerSchema)` to create a new message.
 */
export declare const ConsumerSchema: GenMessage<Consumer>;
