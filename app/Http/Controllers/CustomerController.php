<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use App\Http\Resources\CustomerResource;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Requests\StoreCustomerRequest;

class CustomerController extends Controller{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        $customer = CustomerResource::collection(Customer::all());
        return inertia("Customer", [
            "customers" => $customer,
            "HeadTable" => ["no","code", "name", "telp", "aksi"],
            ]);
        // return Inertia::render("Homepage", [
        //     "customers" => Customer::all()->map(fn($customer) => [
        //         "id" => $customer->id,
        //         "name" => $customer->name,
        //         "email" => $customer->email,
        //         "telp" => $customer->telp,
        //     ]),
        //     "create_url" => URL::route("index")]
        // );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(){
        $codeCustomer = 2022 . " - " . rand(100, 999);
        return inertia("InputCustomer", [ "code_customer" => $codeCustomer, "created_url" => route("customer.store")]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCustomerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCustomerRequest $request){
        Customer::create($request->validated());
        return redirect()->route("customer.index")->with("message", "Created Success");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer){}

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer){
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCustomerRequest  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer){

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        Customer::find($id)->delete();
        return redirect()->route("customer.index")->with("message", "Delete Success");
    }
}