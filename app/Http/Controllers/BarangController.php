<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use App\Models\Barang;
use App\Http\Requests\StoreBarangRequest;
use App\Http\Requests\UpdateBarangRequest;
use App\Http\Resources\BarangResource;
use Illuminate\Http\Request;

class BarangController extends Controller{
    public function index(){
        return inertia("Barang", [
            "Barang" => BarangResource::collection(Barang::all()),
            "HeadTable" => ["no","code Barang", "name", "qty", "diskon", "harga", "Aksi"]]);
    }
    public function create(){
        $code = rand(100000, 999999);
        return inertia("InputBarang",[
            "codeBarang" => $code,
            "created_url" => route("barang.store")
        ]);
    }
    public function store(StoreBarangRequest $request){
        $request["qty"] = (int)$request["qty"];
        $request["harga"] = (int)$request["harga"];
        Barang::create($request->validated());
        return redirect()->route("barang.index")->with("message", "Created Success");
    }

    public function edit($id){
        return inertia("UpdateBarang", [
            "barang" => Barang::find($id)
        ]);
    }
    public function update(StoreBarangRequest $request, Barang $barang){
        $barang->update($request->validated());
        // dd([$request, $barang]);
        return redirect()->route("barang.index")->with("message", "Update Success");
    }

    public function destroy($id){
        Sales::where("barang_id", $id   )->delete();
        Barang::find($id)->delete();
        return redirect()->route("barang.index")->with("message", "Delete success");
    }
}