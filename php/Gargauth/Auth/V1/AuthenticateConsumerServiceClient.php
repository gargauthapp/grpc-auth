<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Gargauth\Auth\V1;

/**
 */
class AuthenticateConsumerServiceClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Gargauth\Auth\V1\AuthRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function authenticate(\Gargauth\Auth\V1\AuthRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/gargauth.auth.v1.AuthenticateConsumerService/authenticate',
        $argument,
        ['\Gargauth\Auth\V1\AuthResponse', 'decode'],
        $metadata, $options);
    }

}
