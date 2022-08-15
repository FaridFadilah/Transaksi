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
    Route::get("/sales/{sales}/edit", "edit")->name("edit");
    Route::put("/sales/{sales}/edit", "update")->name("update");
    Route::delete("/sales/destroy/{id}", "destroy")->name("destroy");
});
Route::resource("/customer", CustomerController::class);
Route::resource("/barang", BarangController::class);

require __DIR__.'/auth.php';