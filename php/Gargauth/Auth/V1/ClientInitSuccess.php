<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: gargauth/auth/v1/init/client_init_success.proto

namespace Gargauth\Auth\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>gargauth.auth.v1.ClientInitSuccess</code>
 */
class ClientInitSuccess extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>bytes payload = 1 [json_name = "payload"];</code>
     */
    protected $payload = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $payload
     * }
     */
    public function __construct($data = NULL) {
        \Gargauth\Auth\V1\GPBMetadata\ClientInitSuccess::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>bytes payload = 1 [json_name = "payload"];</code>
     * @return string
     */
    public function getPayload()
    {
        return $this->payload;
    }

    /**
     * Generated from protobuf field <code>bytes payload = 1 [json_name = "payload"];</code>
     * @param string $var
     * @return $this
     */
    public function setPayload($var)
    {
        GPBUtil::checkString($var, False);
        $this->payload = $var;

        return $this;
    }

}

