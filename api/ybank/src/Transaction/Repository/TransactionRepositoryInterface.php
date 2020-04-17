<?php

namespace Ybank\Transaction\Repository;

use Ybank\BaseRepositoryInterface;

interface TransactionRepositoryInterface extends BaseRepositoryInterface
{
    /**
     * Get all transactions in a specific account
     * @param  int  $accountId
     * @return iterable
     */
    public function allTransactionsInAccount(int $accountId): iterable;
}
