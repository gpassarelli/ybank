<?php


namespace Ybank\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Ybank\Account\Listeners\UpdateAccountsBalanceAfterTransactionCreatedListener;
use Ybank\Transaction\Events\TransactionCreated;

class YbankEventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        TransactionCreated::class => [
            UpdateAccountsBalanceAfterTransactionCreatedListener::class
        ],
    ];
}
