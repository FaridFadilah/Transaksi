<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->foreignId("customer_id")->constrained("customers");
            $table->foreignId("barang_id")->constrained("barangs");
            $table->string("code");
            $table->string("tgl");
            $table->decimal("jumlah_pesanan");
            $table->decimal("subtotal");
            $table->decimal("ongkir");
            $table->decimal("total_bayar")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('sales');
    }
};
