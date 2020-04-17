<?php

namespace Ybank\Transaction\Repository;

use Ybank\EloquentBaseRepository;
use Ybank\Transaction\Transaction;

class EloquentTransactionRepository extends EloquentBaseRepository implements TransactionRepositoryInterface
{
    public function __construct(Transaction $model)
    {
        parent::__construct($model);
    }

    /**
     * Get all transactions in a specific account
     * @param  int  $accountId
     * @return iterable
     */
    public function allTransactionsInAccount(int $accountId): iterable
    {
        return $this->model->where('from_account_id', $accountId)->orWhere('to_account_id', $accountId)->paginate();
    }
}
