<?php

namespace Ybank\Providers;

use Illuminate\Support\ServiceProvider;
use Ybank\Account\Repository\AccountRepositoryInterface;
use Ybank\Account\Repository\EloquentAccountRepository;
use Ybank\Account\Service\AccountServiceInterface;
use Ybank\Account\Service\EloquentAccountService;
use Ybank\BaseRepositoryInterface;
use Ybank\Currency\Repository\CurrencyRepositoryInterface;
use Ybank\Currency\Repository\EloquentCurrencyRepository;
use Ybank\EloquentBaseRepository;
use Ybank\Transaction\Observers\TransactionObserver;
use Ybank\Transaction\Repository\EloquentTransactionRepository;
use Ybank\Transaction\Repository\TransactionRepositoryInterface;
use Ybank\Transaction\Service\EloquentTransactionService;
use Ybank\Transaction\Service\TransactionServiceInterface;
use Ybank\Transaction\Transaction;

class YbankRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(BaseRepositoryInterface::class, EloquentBaseRepository::class);
        $this->app->bind(AccountRepositoryInterface::class, EloquentAccountRepository::class);
        $this->app->bind(AccountServiceInterface::class, EloquentAccountService::class);
        $this->app->bind(CurrencyRepositoryInterface::class, EloquentCurrencyRepository::class);
        $this->app->bind(TransactionRepositoryInterface::class, EloquentTransactionRepository::class);
        $this->app->bind(TransactionServiceInterface::class, EloquentTransactionService::class,
            EloquentAccountRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Transaction::observe(TransactionObserver::class);
    }
}
