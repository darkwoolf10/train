<?php

namespace App\Http\Controllers\Admin;

use App\Route;
use App\Station;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Validator;

class RouteController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function index()
    {
        $routes = Route::all();

        return response()->json([
            'response' => $routes
        ]);
    }

    /**
     * @return JsonResponse
     */
    public function store()
    {
        $validator = Validator::make(Request::all(),[
            'from' => 'required',
            'to' => 'required',
            'price' => 'required|float',
            'departure_time' => 'required',
            'arrival_time' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'error' => $validator->messages()
            ], 400);
        }

        $route = new Route();
        $route->price = Request::get('price');
        $route->departure_time = Request::get('departure_time');
        $route->arrival_time = Request::get('arrival_time');

        $form = Station::where('city', Request::get('from'));
        $to = Station::where('city', Request::get('to'));

        $route->from()->save($form);
        $route->to()->save($to);
        $route->save();

        return response()->json([
            'response' => 'Route created!'
        ], 201);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getRoutesByDate(Request $request): JsonResponse
    {
        $from = $request->get('from');
        $to = $request->get('to');
        $date = $request->get('date');
        $routes = Route::where('from', $from)->andWhere('to', $to)->andWhere('date', $date)->get();

        return response()->json([
            'routes' => $routes,
        ], 200);
    }
}
