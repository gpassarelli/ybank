<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Ybank\Account\Account;
use Ybank\Account\Exceptions\InsufficientFundsException;
use Ybank\Transaction\Transaction;

class EloquentTransactionModelTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function testAmountMustBeGreaterThanZero()
    {
        $transactionAmountLtZero = $this->createTransaction(['amount' => -10]);
        $this->assertFalse($transactionAmountLtZero->validate());
        $this->assertContains('amount', $transactionAmountLtZero->getErrors()->keys());

        $transactionAmountGtZero = $this->createTransaction(['amount' => 10]);
        $this->assertTrue($transactionAmountGtZero->validate());
    }

    private function createTransaction($customProps = [])
    {
        /**
         * Due to props order in Transaction Factory
         * FROM ACCOUNT will always be the first to be created | ID = 1
         * TO ACCOUNT will always be the second to be created | ID = 2
         */
        return factory(Transaction::class)->make($customProps);
    }

    public function testFromAccountExist()
    {
        $transaction = $this->createTransaction();
        $this->assertTrue($transaction->validate());

        $transaction->from_account_id = 56454654;
        $this->assertFalse($transaction->validate());
        $this->assertContains('from_account_id', $transaction->getErrors()->keys());
    }

    public function testToAccountExist()
    {
        $transaction = $this->createTransaction();
        $this->assertTrue($transaction->validate());

        $transaction->to_account_id = 56454654;
        $this->assertFalse($transaction->validate());
        $this->assertContains('to_account_id', $transaction->getErrors()->keys());
    }

    public function testFromAccountIsDifferentThanToAccount()
    {
        $transaction = $this->createTransaction();
        $this->assertTrue($transaction->validate());

        $transaction->to_account_id = $transaction->from_account_id;
        $this->assertFalse($transaction->validate());
        $this->assertContains('to_account_id', $transaction->getErrors()->keys());

        $transaction->from_account_id = $transaction->to_account_id;
        $this->assertFalse($transaction->validate());
        $this->assertContains('from_account_id', $transaction->getErrors()->keys());
    }

    public function testIfThrowsExceptionWhenFromAccountHasNoBalanceOnCreatingTransaction()
    {
        $this->expectException(InsufficientFundsException::class);

        $toAccount = factory(Account::class)->create();
        $fromAccount = factory(Account::class)->create(['balance' => 0]);
        $customTransactionProps = ['to_account_id' => $toAccount->id, 'from_account_id' => $fromAccount->id];
        $transaction = $this->createTransaction($customTransactionProps);
        $transaction->save();
    }

    public function testIfAccountsBalanceAreUpdatedAfterTransactionIsSaved()
    {
        $fromAccount = factory(Account::class)->create(['balance' => 1000]);
        $toAccount = factory(Account::class)->create(['balance' => 0]);
        $customTransactionProps = [
            'to_account_id' => $toAccount->id,
            'from_account_id' => $fromAccount->id,
            'amount' => 100
        ];
        $transaction = factory(Transaction::class)->create($customTransactionProps);
        $transaction->save();

        $updatedFromAccount = Account::find($fromAccount->id);
        $this->assertEquals($updatedFromAccount->balance, 900);

        $updatedToAccount = Account::find($toAccount->id);
        $this->assertEquals($updatedToAccount->balance, 100);
    }
}

