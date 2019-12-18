<?php

namespace App\Http\Controllers\Api;

use App\Route;
use App\Station;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;
use Illuminate\Http\JsonResponse;

/**
 * @package App\Http\Controllers\Api
 */
class RouteController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function find()
    {
        $from = Station::where('city', Request::get('from'));
        $to = Station::where('city', Request::get('to'));

        $routes = Route::where('from', '=', $from->id)->andWhere('to', '=', $to->id)->get();

        if (!$routes) {
            return response()->json([
                'error' => 'Not found routes',
            ], 400);
        }

        return response()->json([
            'response' => $routes
        ]);
    }
}
