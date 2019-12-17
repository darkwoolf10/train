<?php

namespace App\Http\Controllers\Api;

use App\Station;
use Illuminate\Http\JsonResponse;
use Laratrust\Models\LaratrustRole;

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
        $owner = new LaratrustRole();

        return response()->json($stations);
    }
}
