<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use Ybank\Account\Account;
use Ybank\Transaction\Transaction;

class EloquentAccountModelTest extends TestCase
{
    public function testHasBalanceForTransaction()
    {
        $transaction = new Transaction();
        $transaction->amount = 10;

        $accountWithBalance = new Account();
        $accountWithBalance->balance = 1000;
        $this->assertTrue($accountWithBalance->hasBalanceForTransaction($transaction));

        $accountWithoutBalance = new Account();
        $accountWithoutBalance->balance = 0;
        $this->assertFalse($accountWithoutBalance->hasBalanceForTransaction($transaction));
    }

    public function testIncreaseBalance()
    {
        $initialBalance = 100;
        $transactionAmount = 10;
        $initialAccount = new Account();
        $initialAccount->balance = $initialBalance;
        $this->assertEquals($initialAccount->balance, $initialBalance);
        $initialAccount->increaseBalance($transactionAmount);
        $this->assertEquals($initialAccount->balance, $initialBalance + $transactionAmount);
    }

    public function testDecreaseBalance()
    {
        $initialBalance = 100;
        $transactionAmount = 10;
        $initialAccount = new Account();
        $initialAccount->balance = $initialBalance;
        $this->assertEquals($initialAccount->balance, $initialBalance);
        $initialAccount->decreaseBalance($transactionAmount);
        $this->assertEquals($initialAccount->balance, $initialBalance - $transactionAmount);
    }
}
