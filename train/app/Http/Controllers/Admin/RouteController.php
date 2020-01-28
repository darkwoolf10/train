<?php

namespace App\Http\Controllers\Admin;

use App\Http\Helper\DateTimeHelper;
use App\Route;
use App\Station;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RouteController extends Controller
{
    /**
     * @var DateTimeHelper
     */
    private $dateTimeHelper;

    /**
     * @param DateTimeHelper $dateTimeHelper
     */
    public function __construct(
      DateTimeHelper $dateTimeHelper
    ) {
        $this->dateTimeHelper = $dateTimeHelper;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $requestData = $request->get('route');
        $validator = Validator::make($request->all(),[
            'route.fromCityName' => 'required',
            'route.toCityName' => 'required',
            'route.price' => 'required',
            'route.departureTime' => 'required',
            'route.departureDate' => 'required',
            'route.arrivalTime' => 'required',
            'route.arrivalDate' => 'required',
            'route.trainNumber' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'error' => $validator->messages()
            ], 400);
        }

        $route = new Route();
        $route->price = $requestData['price'];
        $departureDatetime = $this->dateTimeHelper
            ->formateDateTime($requestData['departureDate'], $requestData['departureTime']);
        $route->departure_time = $departureDatetime;

        $arrivalDateTime = $this->dateTimeHelper
            ->formateDateTime($requestData['arrivalDate'], $requestData['arrivalTime']);
        $route->arrival_time = $arrivalDateTime;

        $from = Station::where('city', $requestData['fromCityName'])->first();
        $to = Station::where('city', $requestData['toCityName'])->first();
        $route->from()->associate($from);
        $route->to()->associate($to);
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
