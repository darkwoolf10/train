<?php

namespace App\Http\Controllers\Api;

use App\Route;
use App\Station;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * @package App\Http\Controllers\Api
 */
class RouteController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function index()
    {
        $routes = Route::all();

        foreach ($routes as $route) {
            $route['from'] = $route->from;
            $route['to'] = $route->to;
        }

        return response()->json([
            'response' => $routes
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function find(Request $request): JsonResponse
    {
        $from = Station::where('city', $request->get('from'));
        $to = Station::where('city', $request->get('to'));
        $date = Carbon::parse($request->get('date'))->format('Y/m/d');

        $routes = Route::where('from_id', '=', $from->id)->andWhere('to_id', '=', $to->id)->get();
        $findRoutes = [];

        foreach ($routes as $route) {
            $departureDate = Carbon::parse($route['departure_time'])->format('Y/m/d');
            if ($departureDate === $date) {
                $findRoutes[] = $route;
            }
        }

        if (!$findRoutes) {
            return response()->json([
                'error' => 'Not found routes',
            ], 400);
        }

        return response()->json([
            'response' => $findRoutes,
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function occupiedSeats(Request $request): JsonResponse
    {
        $route = Route::find($request->get('route'));
        $ticketsPosition = [];

        foreach ($route->tickets as $ticket) {
            $ticketsPosition[] = $ticket['position'];
        }

        return response()->json([
            'response' => $ticketsPosition,
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function findRoutes(Request $request): JsonResponse
    {
        $from = Station::where('name', $request->get('from'))->first();
        $to = Station::where('name', $request->get('to'))->first();
        $routes = Route::where('from_id', $from->id)->where('to_id', $to->id)->get();
        $findDate =  Carbon::parse($request->get('date'))->format('Y/m/d');
        $resultRoutes = [];

        foreach ($routes as $route) {
            $routeDate = Carbon::parse($route->departure_time)->format('Y/m/d');

            if ($findDate === $routeDate) {
                $route['from'] = $route->from;
                $route['to'] = $route->to;
                $resultRoutes[] = $route;
            }
        }

        return response()->json([
            'response' => $resultRoutes,
        ]);
    }
}
