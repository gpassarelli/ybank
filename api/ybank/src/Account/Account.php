<?php

namespace Ybank\Account;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Ybank\Currency\Currency;
use Ybank\EloquentBaseModel as Model;
use Ybank\Transaction\Transaction;

class Account extends Model
{
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'balance' => 'float',
    ];

    public function currency()
    {
        return $this->belongsTo(Currency::class);
    }

    /**
     * Get all the transactions made from this account.
     *
     * @return HasMany
     */
    public function transactionsFrom()
    {
        return $this->hasMany(Transaction::class, 'from_account_id');
    }


    /**
     * Get all the transactions made to this account.
     *
     * @return HasMany
     */
    public function transactionsTo()
    {
        return $this->hasMany(Transaction::class, 'to_account_id');
    }

    /**
     * Get all the transactions made to and from this account.
     *
     * @return HasMany
     */
    public function transactions()
    {
        return $this->hasMany(Transaction::class, 'to_account_id')->orWhere('from_account_id', $this->id);
    }

    /**
     * Checks if account has enough balance for a transaction
     *
     * @param  Transaction  $transaction
     * @return bool
     */
    public function hasBalanceForTransaction(Transaction $transaction): bool
    {
        return $this->balance >= $transaction->amount;
    }

    /**
     * Increase the account balance by a specific amount
     *
     * @param  float  $amount
     * @return self
     */
    public function increaseBalance(float $amount)
    {
        $this->balance += $amount;
        return $this;
    }

    /**
     * Decrease the account balance by a specific amount
     *
     * @param  float  $amount
     * @return self
     */
    public function decreaseBalance(float $amount)
    {
        $this->balance -= $amount;
        return $this;
    }
}
