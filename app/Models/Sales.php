<?php

namespace App\Models;

use App\Models\Barang;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Sales extends Model{
    use HasFactory;
    protected $guarded = ["id"];
    protected $with = ["customer", "barang"];
    public function customer(){
        return $this->belongsTo(Customer::class,"customer_id", "id");
    }
    public function barang(){
        return $this->belongsTo(Barang::class, "barang_id", "id");
    }   
}