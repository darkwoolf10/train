<?php

namespace App\Http\Controllers\Api;

use App\Station;
use Illuminate\Http\JsonResponse;

/**
 * @package App\Http\Controllers\Api
 */
class StationsController
{
    /**
     * @return JsonResponse
     */
    public function index()
    {
        $stations = Station::all();

        return response()->json($stations);
    }
}
