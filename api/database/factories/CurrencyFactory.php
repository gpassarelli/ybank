<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Ybank\Currency\Currency;

use Faker\Generator as Faker;

$factory->define(Currency::class, function (Faker $faker) {
    return [
        "currency" => $faker->unique()->randomElement(['USD','EUR']),
    ];
});
