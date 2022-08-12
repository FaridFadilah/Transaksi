<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\SalesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get("/", fn () => Inertia::render("Homepage"))->name("index");
Route::controller(SalesController::class)->name("sales.")->group(function(){
    Route::get("/", "index")->name("index");
    Route::get("/sales/create", "create")->name("create");
    Route::post("/sales/create", "store")->name("store");
    Route::delete("/sales/destroy/{id}", "destroy")->name("destroy");
});

Route::controller(CustomerController::class)->name("customer.")->group(function(){
    Route::get("/customer", "index")->name("index");
    Route::get("/customer/create", "create")->name("create");
    Route::post("/customer/create", "store")->name("store");
    Route::delete("/customer/destroy/{id}", "destroy")->name("destroy");
});

Route::controller(BarangController::class)->name("barang.")->group(function(){
    Route::get("/barang", "index")->name("index");
    Route::get("/barang/create", "create")->name("create");
    Route::post("/barang/create", "store")->name("store");
    Route::delete("/barang/destroy/{id}", "destroy")->name("destroy");
});

require __DIR__.'/auth.php';