<?php


namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Ybank\Transaction\Exceptions\TransactionNotAllowedException;
use Ybank\Transaction\Repository\TransactionRepositoryInterface;
use Ybank\Transaction\Requests\CreateTransactionRequest;
use Ybank\Transaction\Resources\TransactionResource;
use Ybank\Transaction\Resources\TransactionsCollection;
use Ybank\Transaction\Service\TransactionServiceInterface;

class TransactionController
{
    /**
     * Get all the transactions from and to the account that is logged.
     *
     * @param  Request  $request
     * @param  TransactionRepositoryInterface  $transactionsRepository
     * @return TransactionsCollection
     */
    public function index($accountId, Request $request, TransactionRepositoryInterface $transactionsRepository)
    {
        $currentAccount = $accountId ?: $request->user()->id;
        return new TransactionsCollection($transactionsRepository->allTransactionsInAccount($currentAccount));
    }

    /**
     * Display a listing of the resource.
     *
     * @param  CreateTransactionRequest  $request
     * @param  TransactionServiceInterface  $transactionService
     * @return TransactionResource
     */
    public function store(CreateTransactionRequest $request, TransactionServiceInterface $transactionService)
    {
        try {
            $transactionData = $request->only(['from_account_id','to_account_id', 'amount', 'details']);
            $transaction = $transactionService->create($transactionData);
            return new TransactionResource($transaction);
        } catch (TransactionNotAllowedException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }
}
