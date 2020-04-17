<?php

namespace Ybank\Account\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Ybank\Account\Service\AccountServiceInterface;
use Ybank\Transaction\Events\TransactionCreated;

class UpdateAccountsBalanceAfterTransactionCreatedListener implements ShouldQueue
{
    /**
     * @var AccountServiceInterface
     */
    private $accountService;

    /**
     * Create the event listener.
     *
     * @param  AccountServiceInterface  $accountService
     */
    public function __construct(AccountServiceInterface $accountService)
    {
        $this->accountService = $accountService;
    }

    /**
     * Handle the event.
     *
     * @param  TransactionCreated  $event
     * @return void
     */
    public function handle(TransactionCreated $event)
    {
        $transaction = $event->transaction;

        $fromAccount = $transaction->fromAccount;
        $this->accountService->decreaseAccountBalance($fromAccount->id, $transaction->amount);

        $toAccount = $transaction->toAccount;
        $this->accountService->increaseAccountBalance($toAccount->id, $transaction->amount);
    }
}
