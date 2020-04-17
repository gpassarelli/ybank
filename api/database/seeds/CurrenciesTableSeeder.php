<?php

use Illuminate\Database\Seeder;

class CurrenciesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();

        DB::table('currencies')->truncate();

        DB::table('currencies')->insert([
            'currency' => 'EUR',
        ]);

        DB::table('currencies')->insert([
            'currency' => 'USD',
        ]);

        Schema::enableForeignKeyConstraints();

    }
}
