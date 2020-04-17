<?php

/** @var Factory $factory */

use Illuminate\Database\Eloquent\Factory;
use Ybank\Account\Account;
use Faker\Generator as Faker;
use Ybank\Currency\Currency;

$factory->define(Account::class, function (Faker $faker) {
    $currency = Currency::inRandomOrder()->first();
    if (!$currency) {
        factory(Currency::class,2)->create();
        $currency = Currency::inRandomOrder()->first();
    }

    return [
        "name" => $faker->name,
        "balance" => 10000,
        "currency_id" => $currency->id,
        "created_at" => $faker->date()
    ];
});
