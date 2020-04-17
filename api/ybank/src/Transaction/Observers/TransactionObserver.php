<?php

namespace Ybank\Transaction\Observers;

use Ybank\Account\Exceptions\InsufficientFundsException;
use Ybank\Transaction\Events\TransactionCreated;
use Ybank\Transaction\Transaction;

class TransactionObserver
{
    /**
     * Handle the transaction "creating" event.
     *
     * @param  Transaction  $transaction
     * @return void
     * @throws InsufficientFundsException
     */
    public function creating(Transaction $transaction)
    {
        if (!$transaction->fromAccount->hasBalanceForTransaction($transaction)) {
            throw new InsufficientFundsException();
        }
    }

    /**
     * Handle the transaction "created" event.
     *
     * @param  Transaction  $transaction
     * @return void
     */
    public function created(Transaction $transaction)
    {
        event(new TransactionCreated($transaction));
    }

}
