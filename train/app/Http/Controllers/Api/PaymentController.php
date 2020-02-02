<?php

namespace App\Http\Controllers\Api;

use App\Payment;
use App\Ticket;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

/**
 * Class PaymentController
 * @package App\Http\Controllers\Api
 */
class PaymentController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function payment(Request $request)
    {
        $validator = $request->validate([
            'cardNumber' => 'required|digits:16',
            'price' => 'required|regex:/^\d+(\.\d{1,2})?$/',
        ]);

//        if ($validator->fails()) {
//            throw new \InvalidArgumentException('Invalid data');
//        }

        $payment = new Payment();
        $payment->cardNumber = $request->get('cardNumber');
        $payment->price = $request->get('price');

        $ticket = new Ticket();
        $ticket->payment()->save($payment);

        return response()->json([
           'response' => 'Payment was successful!',
        ]);
    }
}
