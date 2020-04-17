<?php

namespace Ybank\Account\Repository;

use Ybank\Account\Account;
use Ybank\EloquentBaseRepository;

class EloquentAccountRepository extends EloquentBaseRepository implements AccountRepositoryInterface
{
    public function __construct(Account $model)
    {
        parent::__construct($model);
    }
}
