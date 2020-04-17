<?php

namespace Ybank\Transaction\Service;

use Ybank\BaseServiceInterface;
use Ybank\Transaction\Transaction;

interface TransactionServiceInterface extends BaseServiceInterface
{
    /**
     * TransactionServiceInterface constructor.
     * @param  Transaction  $transaction
     */
    public function __construct(Transaction $transaction);
}
