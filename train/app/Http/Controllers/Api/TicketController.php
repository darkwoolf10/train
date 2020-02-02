<?php

namespace App\Http\Controllers\Api;

use App\Route;
use App\Ticket;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

/**
 * @package App\Http\Controllers\Api
 */
class TicketController
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $validator = $request->validate([
            'route' => 'required',
            'position' => 'required',
            'baggage' => 'required',
            'bedspread' => 'required',
            'tea' => 'required',
        ]);
//
//        if ($validator->fails()) {
//            throw new \InvalidArgumentException('Invalid data');
//        }

        $ticket = new Ticket();
        $route = Route::find($request->get('route'));
        $ticket->route()->associate($route);
        $ticket->position = $request->get('position');
        $ticket->baggage = $request->get('baggage');
        $ticket->bedspread = $request->get('bedspread');
        $ticket->tea = $request->get('tea');

        if (Auth::user()) {
            $ticket->user = Auth::user()->getId();
        }

        $ticket->save();

        return response()->json([
            'response' => 'Payment was successful!',
        ]);
    }
}
