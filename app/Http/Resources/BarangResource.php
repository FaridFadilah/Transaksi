<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BarangResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request){
        return [
            "id" => $this->id,
            "code" => $this->code,
            "name" => $this->name,
            "discount" => $this->discount,
            "qty" => $this->qty,
            "harga" => $this->harga
        ];
    }
}