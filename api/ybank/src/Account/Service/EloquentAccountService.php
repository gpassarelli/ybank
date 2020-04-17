<?php

namespace Ybank\Account\Service;

use Str;
use Ybank\Account\Account;
use Ybank\EloquentBaseService;

class EloquentAccountService extends EloquentBaseService implements AccountServiceInterface
{
    /**
     * EloquentAccountService constructor.
     * @param  Account  $account
     */
    public function __construct(Account $account)
    {
        parent::__construct($account);
    }

    /**
     * Increase the account balance by a specific amount
     *
     * @param  int  $accountId  The id of the desired account to be updated
     * @param  float  $amount  The amount to be increased
     * @return bool
     */
    public function increaseAccountBalance(int $accountId, float $amount): bool
    {
        $account = $this->model->findOrFail($accountId);
        $account->increaseBalance($amount);
        $account->save();
        return $amount;
    }

    /**
     * Decrease the account balance by a specific amount
     *
     * @param  int  $accountId  The id of the desired account to be updated
     * @param  float  $amount  The amount to be increased
     * @return bool
     */
    public function decreaseAccountBalance(int $accountId, float $amount): bool
    {
        $account = $this->model->findOrFail($accountId);
        $account->decreaseBalance($amount);
        $account->save();
        return $amount;
    }
}
