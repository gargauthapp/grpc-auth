<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: gargauth/auth/v1/authenticate_consumer.proto

namespace Gargauth\Auth\V1\GPBMetadata;

class AuthenticateConsumer
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \Gargauth\Auth\V1\GPBMetadata\AuthenticateConsumerRequest::initOnce();
        \Gargauth\Auth\V1\GPBMetadata\AuthenticateConsumerResponse::initOnce();
        $pool->internalAddGeneratedFile(
            "\x0A\xA4\x03\x0A,gargauth/auth/v1/authenticate_consumer.proto\x12\x10gargauth.auth.v1\x1A5gargauth/auth/v1/authenticate_consumer_response.proto2\x8C\x01\x0A\x1BAuthenticateConsumerService\x12m\x0A\x0Cauthenticate\x12-.gargauth.auth.v1.AuthenticateConsumerRequest\x1A..gargauth.auth.v1.AuthenticateConsumerResponseB\x93\x01\x0A\x14com.gargauth.auth.v1B\x19AuthenticateConsumerProtoP\x01\xA2\x02\x03GAX\xAA\x02\x10Gargauth.Auth.V1\xCA\x02\x10Gargauth\\Auth\\V1\xE2\x02\x1CGargauth\\Auth\\V1\\GPBMetadata\xEA\x02\x12Gargauth::Auth::V1b\x06proto3"
        , true);

        static::$is_initialized = true;
    }
}

