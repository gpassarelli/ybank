<?php

namespace Ybank\Transaction;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Ybank\Account\Account;
use Ybank\EloquentBaseModel as Model;
use Ybank\Traits\UsesUuid;

class Transaction extends Model
{
    use UsesUuid;
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'amount' => 'float',
    ];
    
    protected static $rules = [
        'to_account_id' => [
            'required',
            'numeric',
            'different:from_account_id',
            'exists:Ybank\Account\Account,id',
        ],
        'from_account_id' => [
            'required',
            'numeric',
            'different:to_account_id',
            'exists:Ybank\Account\Account,id',
        ],
        'amount' => [
            'required',
            'numeric',
            'gt:0',
        ],
        'details' => [
            'required',
            'string',
            'max:255',
        ]
    ];

    /**
     * Get the account that this transaction was made from
     *
     * @return BelongsTo
     */
    public function fromAccount()
    {
        return $this->belongsTo(Account::class);
    }

    /**
     * Get the account that this transaction was made from
     *
     * @return BelongsTo
     */
    public function toAccount()
    {
        return $this->belongsTo(Account::class);
    }

    /**
     * Get the account to and the account from this transaction belongs to
     *
     * @return BelongsToMany
     */
    public function accounts()
    {
        return $this->belongsToMany(Account::class)->withPivot('id');
    }
}
