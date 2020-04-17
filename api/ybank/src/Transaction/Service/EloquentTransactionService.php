<?php


namespace Ybank\Transaction\Service;

use Exception;
use Illuminate\Validation\ValidationException;
use Ybank\EloquentBaseModel as Model;
use Ybank\EloquentBaseService;
use Ybank\Transaction\Exceptions\TransactionNotAllowedException;
use Ybank\Transaction\Transaction;

class EloquentTransactionService extends EloquentBaseService implements TransactionServiceInterface
{
    /**
     * EloquentTransactionService constructor.
     * @param  Transaction  $transaction
     */
    public function __construct(Transaction $transaction)
    {
        parent::__construct($transaction);
    }

    /**
     *
     * Creates a new transaction
     *
     * @param  array  $data
     * @return Transaction
     * @throws TransactionNotAllowedException
     * @throws ValidationException
     */
    public function create(array $data): Model
    {
        $transaction = new Transaction();
        $transaction->from_account_id = $data['from_account_id'];
        $transaction->to_account_id = $data['to_account_id'];
        $transaction->amount = $data['amount'];
        $transaction->details = $data['details'];
        $transaction->validate();

        if ($transaction->hasErrors()) {
            throw ValidationException::withMessages($transaction->getErrors()->toArray());
        }

        try {
            $transaction->save();
        } catch (Exception $e) {
            throw new TransactionNotAllowedException($e->getMessage());
        }

        return $transaction;
    }
}
