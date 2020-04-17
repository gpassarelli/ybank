<?php

namespace Ybank\Currency;

use Ybank\Account\Account;
use Ybank\EloquentBaseModel as Model;

class Currency extends Model
{
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * Get the accounts for that has this currency.
     */
    public function accounts()
    {
        return $this->hasMany(Account::class);
    }
}
