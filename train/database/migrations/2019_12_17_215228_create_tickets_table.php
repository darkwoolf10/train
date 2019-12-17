<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('from')->unsigned();
            $table->integer('to')->unsigned();
            $table->dateTime('departure_date');
            $table->integer('user_id')->unsigned();
            $table->boolean('baggage');
            $table->boolean('bedspread');
            $table->boolean('tea');
            $table->timestamps();

            $table->foreign('from')
                ->references('id')
                ->on('stations')
                ->onDelete('cascade');

            $table->foreign('to')
                ->references('id')
                ->on('stations')
                ->onDelete('cascade');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
}
