<?php

namespace App\Http\Services;

use App\Route;
use App\Ticket;
use Illuminate\Support\Facades\Auth;

class TicketService
{
    /**
     * @param array $request
     * @return Ticket
     */
    public function createTicket(array $request): Ticket
    {
        $ticket = new Ticket();
        $route = Route::find($request['route']);
        $ticket->route()->associate($route);
        $ticket->position = $request['position'];
        $ticket->baggage = $request['baggage'];
        $ticket->bedspread = $request['bedspread'];
        $ticket->tea = $request['tea'];

        if (Auth::user()) {
            $ticket->user = Auth::user()->getId();
        }

        $ticket->save();

        return $ticket;
    }
}
