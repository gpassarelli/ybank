<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateTransactionsRelationshipWithAccount extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * Workaround to allow work on Sqlite for testing
         */
        Schema::table('transactions', function (Blueprint $table) {
            $table->renameColumn('from', 'from_account_id');
        });
        Schema::table('transactions', function (Blueprint $table) {
            $table->foreign('from_account_id')->references('id')->on('accounts');
        });
        Schema::table('transactions', function (Blueprint $table) {
            $table->renameColumn('to', 'to_account_id');
        });
        Schema::table('transactions', function (Blueprint $table) {
            $table->foreign('to_account_id')->references('id')->on('accounts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        /**
         * Workaround to allow work on Sqlite for testing
         */
        if (env('DB_CONNECTION') !== 'sqlite') {
            Schema::table('transactions', function (Blueprint $table) {
               $table->dropForeign(['from_account_id']);
            });
            Schema::table('transactions', function (Blueprint $table) {
               $table->dropForeign(['to_account_id']);
            });
        }

        Schema::table('transactions', function (Blueprint $table) {
           $table->renameColumn('from_account_id', 'from');
        });
        Schema::table('transactions', function (Blueprint $table) {
           $table->renameColumn('to_account_id', 'to');
        });
    }
}
