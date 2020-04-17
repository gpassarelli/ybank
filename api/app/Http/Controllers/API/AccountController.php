<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Ybank\Account\Repository\AccountRepositoryInterface;
use Ybank\Account\Resources\AccountResource;
use Ybank\Account\Service\AccountServiceInterface;

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
}
