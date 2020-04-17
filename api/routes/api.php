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
Route::get('accounts/{id}/token', 'Api\AccountController@token')->name('accounts.auth');
Route::apiResource('accounts/{id}/transactions', 'Api\TransactionController')->only(['index','store']);
Route::fallback(function () {
    return response()->json(['error' => 'Not Found!'], 404);
});
