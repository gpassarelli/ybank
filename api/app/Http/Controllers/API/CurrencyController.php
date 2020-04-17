<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Ybank\Currency\Repository\CurrencyRepositoryInterface;

class CurrencyController extends Controller
{
    /**
     * @var CurrencyRepositoryInterface
     */
    private $currenciesRepository;

    public function __construct(CurrencyRepositoryInterface $currenciesRepository)
    {
        $this->currenciesRepository = $currenciesRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return $this->currenciesRepository->all();
    }
}
