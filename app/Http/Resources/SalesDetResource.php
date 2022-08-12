<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SalesDetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request){
        return [
            "sales_id" => $this->sales_id,
            "barang_id" => $this->barang_id,
            "harga_bandrol" => $this->harga_bandrol,
            "qty" => $this->qty,
            "discount_persen" => $this->discount_persen,
            "discount_nilai" => $this->discount_nilai,
            "harga_discount" => $this->harga_discount,
            "total" => $this->total,
        ];
    }
}
