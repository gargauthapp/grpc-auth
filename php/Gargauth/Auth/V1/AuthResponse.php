<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: gargauth/auth/v1/authenticate_consumer_response.proto

namespace Gargauth\Auth\V1;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>gargauth.auth.v1.AuthResponse</code>
 */
class AuthResponse extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.gargauth.auth.v1.Correlation correlation = 1 [json_name = "correlation"];</code>
     */
    protected $correlation = null;
    protected $result;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Gargauth\Auth\V1\Correlation $correlation
     *     @type \Gargauth\Auth\V1\AuthSuccessful $success
     *     @type \Gargauth\Auth\V1\AuthFailure $failure
     * }
     */
    public function __construct($data = NULL) {
        \Gargauth\Auth\V1\GPBMetadata\AuthResponse::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.gargauth.auth.v1.Correlation correlation = 1 [json_name = "correlation"];</code>
     * @return \Gargauth\Auth\V1\Correlation|null
     */
    public function getCorrelation()
    {
        return $this->correlation;
    }

    public function hasCorrelation()
    {
        return isset($this->correlation);
    }

    public function clearCorrelation()
    {
        unset($this->correlation);
    }

    /**
     * Generated from protobuf field <code>.gargauth.auth.v1.Correlation correlation = 1 [json_name = "correlation"];</code>
     * @param \Gargauth\Auth\V1\Correlation $var
     * @return $this
     */
    public function setCorrelation($var)
    {
        GPBUtil::checkMessage($var, \Gargauth\Auth\V1\Correlation::class);
        $this->correlation = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.gargauth.auth.v1.AuthSuccessful success = 2 [json_name = "success"];</code>
     * @return \Gargauth\Auth\V1\AuthSuccessful|null
     */
    public function getSuccess()
    {
        return $this->readOneof(2);
    }

    public function hasSuccess()
    {
        return $this->hasOneof(2);
    }

    /**
     * Generated from protobuf field <code>.gargauth.auth.v1.AuthSuccessful success = 2 [json_name = "success"];</code>
     * @param \Gargauth\Auth\V1\AuthSuccessful $var
     * @return $this
     */
    public function setSuccess($var)
    {
        GPBUtil::checkMessage($var, \Gargauth\Auth\V1\AuthSuccessful::class);
        $this->writeOneof(2, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.gargauth.auth.v1.AuthFailure failure = 3 [json_name = "failure"];</code>
     * @return \Gargauth\Auth\V1\AuthFailure|null
     */
    public function getFailure()
    {
        return $this->readOneof(3);
    }

    public function hasFailure()
    {
        return $this->hasOneof(3);
    }

    /**
     * Generated from protobuf field <code>.gargauth.auth.v1.AuthFailure failure = 3 [json_name = "failure"];</code>
     * @param \Gargauth\Auth\V1\AuthFailure $var
     * @return $this
     */
    public function setFailure($var)
    {
        GPBUtil::checkMessage($var, \Gargauth\Auth\V1\AuthFailure::class);
        $this->writeOneof(3, $var);

        return $this;
    }

    /**
     * @return string
     */
    public function getResult()
    {
        return $this->whichOneof("result");
    }

}

