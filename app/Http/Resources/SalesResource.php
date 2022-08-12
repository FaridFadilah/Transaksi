<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SalesResource extends JsonResource
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
            "barang_id" => $this->customer_id,
            "customer_id" => $this->customer_id,
            "code" => $this->code,
            "tgl" => $this->tgl,
            "jumlah_pesanan" => $this->jumlah_pesanan,
            "subtotal" => $this->subtotal,
            "discount" => $this->discount,
            "ongkir" => $this->ongkir,
            "total_bayar" => $this->total_bayar,
        ];
    }
}
