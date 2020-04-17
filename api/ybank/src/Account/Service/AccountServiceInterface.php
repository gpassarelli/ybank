<?php

namespace Ybank\Account\Service;

use Ybank\Account\Account;
use Ybank\Account\AccountInterface;
use Ybank\BaseServiceInterface;

interface AccountServiceInterface extends BaseServiceInterface
{
    /**
     * AccountServiceInterface constructor.
     * @param  Account  $account
     */
    public function __construct(Account $account);

    /**
     * Increase the account balance by a specific amount
     *
     * @param  int  $accountId  The id of the desired account to be updated
     * @param  float  $amount  The amount to be increased
     * @return bool
     */
    public function increaseAccountBalance(int $accountId, float $amount): bool;

    /**
     * Decrease the account balance by a specific amount
     *
     * @param  int  $accountId  The id of the desired account to be updated
     * @param  float  $amount  The amount to be increased
     * @return bool
     */
    public function decreaseAccountBalance(int $accountId, float $amount): bool;
}
