<?php


namespace Ybank\Transaction\Events;

use Illuminate\Queue\SerializesModels;
use Ybank\Account\Account;
use Ybank\Transaction\Transaction;

class TransactionCreated
{
    use SerializesModels;

    /**
     * @var Transaction
     */
    public $transaction;


    /**
     * @var Account
     */
    public $toAccount;


    /**
     * @var Account
     */
    public $fromAccount;

    /**
     * Create a new event instance.
     *
     * @param  Transaction  $transaction
     */
    public function __construct(Transaction $transaction)
    {
        $this->transaction = $transaction;
    }
}
