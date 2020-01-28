<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/payment', 'Api\PaymentController@payment')->name('payment');
Route::get('/stations', 'Api\StationsController@index')->name('stations');
Route::get('/find-routes', 'Api\RouteController@find')->name('find-routes');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'admin'], function() {
    Route::get('/routes', 'Admin\RouteController@index');
    Route::post('/route-store', 'Admin\RouteController@store');
});
