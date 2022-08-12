<?php

namespace App\Models;

use App\Models\Sales;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Customer extends Model{
    use HasFactory;
    protected $guarded = ["id"];
    public function sales(){
        return $this->hasMany(Sales::class);
    }
}
