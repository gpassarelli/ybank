<?php

namespace Ybank\Currency\Repository;

use Ybank\Currency\Currency;
use Ybank\EloquentBaseRepository;

class EloquentCurrencyRepository extends EloquentBaseRepository implements CurrencyRepositoryInterface
{
    public function __construct(Currency $model)
    {
        parent::__construct($model);
    }
}
