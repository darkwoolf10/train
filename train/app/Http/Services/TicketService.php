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

        return $ticket;
    }
}
