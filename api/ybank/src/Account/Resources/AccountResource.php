<?php

namespace Ybank\Account\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AccountResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'balance' => $this->balance,
            'currency' => $this->currency ? $this->currency->currency : null,
            'created_at' => $this->created_at ? $this->created_at->format('Y-m-d\TH:i:sO') : null,
            'updated_at' => $this->updated_at ? $this->updated_at->format('Y-m-d\TH:i:sO') : null,
        ];
    }
}
