<?php


namespace Ybank\Account\Exceptions;

use Exception;

class InsufficientFundsException extends Exception
{
    protected $message = 'Insufficient funds to process the transaction';
}
