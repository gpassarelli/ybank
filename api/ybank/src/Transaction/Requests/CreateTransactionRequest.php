<?php

namespace Ybank\Transaction\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Ybank\Account\Account;
use Ybank\Transaction\Transaction;

class CreateTransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $transaction = new Transaction();
        return $transaction->getRules();
    }
}
