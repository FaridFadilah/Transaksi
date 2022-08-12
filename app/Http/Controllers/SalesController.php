<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use App\Models\Barang;
use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSalesRequest;
use App\Http\Resources\BarangResource;
use App\Http\Resources\SalesResource;
use App\Http\Resources\CustomerResource;

class SalesController extends Controller{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        $sales = Sales::all()->load(["customer","barang"]);
        return inertia("Homepage", [
            "HeadTable" => ["no", "code transaksi", "Tanggal", "Nama Customer", "Jumlah Barang", "Sub total", "diskon", "ongkir", "total", "aksi"],
            "customers" => CustomerResource::collection(Customer::all()),
            "sales" => $sales
            ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(){
        $code = 2022 . "-" . rand(100, 999);
        return inertia("InputSales", [
            "codeTransaksi" => $code,
            "Barang" => BarangResource::collection(Barang::all()),
            "Customer" => CustomerResource::collection(Customer::all()),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSalesRequest $request){
        $barang = Barang::find($request["barang_id"]);
        $hasil = $barang->harga * $request["jumlah_pesanan"]; 
        $discount_nilai = $barang->harga * $barang->discount /100;
        $harga_discount = $barang->harga * $request["jumlah_pesanan"] - $discount_nilai * $request["jumlah_pesanan"] + $request["ongkir"];
        $kurang = $barang->qty -  $request["jumlah_pesanan"];

        if($request["jumlah_pesanan"] == 0){
            return redirect()->route("sales.create")->with("jumlah", "Jumlah barang tidak boleh 0");
        }
        if($request["jumlah_pesanan"] > $barang->qty){
            return redirect()->route("sales.create")->with("jumlah", "Jumlah pesanan melebihi stock kami");
        }
        if($request["ongkir"] < 7500){
            return redirect()->route("sales.create")->with("nominal_ongkir", "Ongkir tidak boleh kurang dari 7500");
        }

        Sales::create([
            "code" => $request["code"],
            "barang_id" => $request["barang_id"],
            "customer_id" => $request["customer_id"],
            "tgl" => $request["tgl"],
            "jumlah_pesanan" => $request["jumlah_pesanan"],
            "subtotal" => $hasil,
            "ongkir" => $request["ongkir"],
            "total_bayar" => $harga_discount,
        ]);

        $barang->update(["qty" => $kurang]);
        // dd($hasil);
        
        return redirect()->route("sales.index")->with("message", "Created success");
    }
    // Sales::create([ "code" => "123456", "customer_id" => 1, "tgl" => now(), "jumlah_barang" => 4, "subtotal" => 16000, "discount" => 20, "ongkir"
    // => 15000, "total_bayar" => 20000])
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id){
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id){
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id){
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        Sales::find($id)->delete();
        return redirect()->route("sales.index")->with("message", "Delete success");
    }
}
