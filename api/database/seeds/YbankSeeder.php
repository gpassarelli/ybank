<?php

use Illuminate\Database\Seeder;
use Ybank\Account\Account;
use Ybank\Transaction\Transaction;

class YbankSeeder extends Seeder
{
    protected $toTruncate = [
        'accounts',
        'transactions',
        'currencies',
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Schema::disableForeignKeyConstraints();
        foreach ($this->toTruncate as $table) {
            \DB::table($table)->truncate();
        }
        \Schema::enableForeignKeyConstraints();

        $accounts = factory(Account::class,5)->create();
        $accountsIds = $accounts->map(function($account){
            return $account->id;
        })->toArray();

        factory(Transaction::class, 50)->make(['from_account_id'=>null,'to_account_id'=>null])->each(function ($transaction) use ($accountsIds) {
            $randomAccountIds = array_rand($accountsIds, 2);
            $fromAccountId = $accountsIds[$randomAccountIds[0]];
            $toAccountId = $accountsIds[$randomAccountIds[1]];
            $transaction->from_account_id = $fromAccountId;
            $transaction->to_account_id = $toAccountId;
                        $transaction->save();

        });

    }
}
