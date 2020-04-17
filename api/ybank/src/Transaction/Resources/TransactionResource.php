<?php

namespace Ybank\Transaction\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'uuid' => $this->uuid,
            'from_account_id' => $this->fromAccount->id,
            'to_account_id' => $this->toAccount->id,
            'amount' => $this->amount,
            'details' => $this->details,
            'created_at' => $this->created_at ? $this->created_at->format('Y-m-d\TH:i:sO') : null,
        ];
    }
}
