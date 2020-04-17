<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Ybank\Account\Repository\AccountRepositoryInterface;
use Ybank\Account\Resources\AccountResource;
use Ybank\Account\Service\AccountServiceInterface;
use Ybank\Transaction\Exceptions\TransactionNotAllowedException;
use Ybank\Transaction\Repository\TransactionRepositoryInterface;
use Ybank\Transaction\Requests\CreateTransactionRequest;
use Ybank\Transaction\Resources\TransactionResource;
use Ybank\Transaction\Resources\TransactionsCollection;
use Ybank\Transaction\Service\TransactionServiceInterface;

class AccountController extends Controller
{
    /**
     * @var AccountRepositoryInterface
     */
    private $accountsRepository;

    public function __construct(AccountRepositoryInterface $accountsRepository)
    {
        $this->accountsRepository = $accountsRepository;
    }

    /**
     * Get a specific account.
     *
     * @param  int  $id
     * @return AccountResource
     */
    public function show($id, Request $request)
    {
        $account = $this->accountsRepository->findById($id);
        return new AccountResource($account);
    }

    /**
     * Get all the transactions from and to the desired account
     *
     * @param  int  $id  The desired account ID
     * @param  Request  $request
     * @param  TransactionRepositoryInterface  $transactionsRepository
     * @return TransactionsCollection
     */
    public function indexTransactions($id, Request $request, TransactionRepositoryInterface $transactionsRepository)
    {
        // Checks if account exist, if not 404
        $this->accountsRepository->findById($id);
        return new TransactionsCollection($transactionsRepository->allTransactionsInAccount($id));
    }

    /**
     * Store a transaction from a specific account
     *
     * @param  int  $id  The desired account ID
     * @param  CreateTransactionRequest  $request
     * @param  TransactionServiceInterface  $transactionService
     * @return TransactionResource
     */
    public function storeTransaction($id, CreateTransactionRequest $request, TransactionServiceInterface $transactionService)
    {
        try {
            $transactionData = $request->only(['to_account_id', 'amount', 'details']);
            $transactionData['from_account_id'] = $id;
            $transaction = $transactionService->create($transactionData);
            return new TransactionResource($transaction);
        } catch (TransactionNotAllowedException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }
}
