<?php
# Generated by the protocol buffer compiler (roadrunner-server/grpc). DO NOT EDIT!
# source: gargauth/auth/v1/authenticate_consumer.proto

namespace Gargauth\Auth\V1;

use Spiral\RoadRunner\GRPC;

interface AuthenticateConsumerServiceInterface extends GRPC\ServiceInterface
{
    // GRPC specific service name.
    public const NAME = "gargauth.auth.v1.AuthenticateConsumerService";

    /**
    * @param GRPC\ContextInterface $ctx
    * @param AuthenticateConsumerRequest $in
    * @return AuthenticateConsumerResponse
    *
    * @throws GRPC\Exception\InvokeException
    */
    public function authenticate(GRPC\ContextInterface $ctx, AuthenticateConsumerRequest $in): AuthenticateConsumerResponse;
}
