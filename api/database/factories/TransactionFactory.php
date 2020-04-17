<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Ybank\Transaction\Transaction;
use Ybank\Account\Account;

use Faker\Generator as Faker;

$factory->define(Transaction::class, function (Faker $faker) {
    return [
        "from_account_id" => factory(Account::class),
        "to_account_id" => factory(Account::class),
        "amount" => $faker->numberBetween(1,50),
        "details" => $faker->sentence,
        "created_at" => $faker->date()
    ];
});
