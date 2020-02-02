<?php

namespace App\Http\Controllers\Api;

use App\Http\Services\TicketService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

/**
 * @package App\Http\Controllers\Api
 */
class TicketController
{
    /**
     * @var TicketService
     */
    private $ticketService;

    /**
     * TicketController constructor.
     * @param TicketService $ticketService
     */
    public function __construct(TicketService $ticketService)
    {
        $this->ticketService = $ticketService;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $tickets = $request->get('tickets');

        foreach ($tickets as $ticket) {
            $this->ticketService->createTicket($ticket);
        }

        return response()->json([
            'response' => 'Payment was successful!',
        ]);
    }
}
