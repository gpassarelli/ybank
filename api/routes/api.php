<?php
use Illuminate\Support\Facades\Route;

/*
  |--------------------------------------------------------------------------
  | API Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register API routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | is assigned the "api" middleware group. Enjoy building your API!
  |
*/
Route::apiResource('currencies', 'Api\CurrencyController')->only(['index']);
Route::apiResource('accounts', 'Api\AccountController')->only(['show']);
Route::post('accounts/{id}/transactions', 'Api\AccountController@storeTransaction');
Route::fallback(function () {
    return response()->json(['error' => 'Not Found!'], 404);
});
