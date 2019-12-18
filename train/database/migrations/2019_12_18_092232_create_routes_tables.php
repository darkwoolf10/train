<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoutesTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('routes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('from')->unsigned();
            $table->integer('to')->unsigned();
            $table->float('price');
            $table->time('departure_time');
            $table->time('arrival_time');

            $table->foreign('from')
                ->references('id')
                ->on('stations')
                ->onDelete('cascade');

            $table->foreign('to')
                ->references('id')
                ->on('stations')
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
        Schema::dropIfExists('routes');
    }
}
