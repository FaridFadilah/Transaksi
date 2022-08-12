<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Sales>
 */
class SalesFactory extends Factory{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(){
        return [
            "customer_id" => fake()->unique()->randomNumber(1, true),
            "code" => rand(100000,999999),
            "tgl" => fake()->date(),
            "subtotal" => fake()->randomNumber(2),
            "discount" => fake()->randomNumber(2),
            "ongkir" => fake()->randomNumber(1),
        ];
    }
}
