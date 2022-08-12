<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SalesDet>
 */
class SalesDetFactory extends Factory{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(){
        return [
            "sales_id" => fake()->unique()->randomNumber(1, true),
            "barang_id" => fake()->unique(true)->randomNumber(1, true),
            "harga_bandrol" => 200000,
            "qty" => fake()->randomNumber(2),
            "discount_persen" => fake()->randomNumber(2),
            "discount_nilai" => fake()->randomNumber(2),
        ];
    }
}
