<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use Illuminate\Http\Request;

/**
 * Class PaymentController
 * @package App\Http\Controllers\Api
 */
class PaymentController extends Controller
{
    /**
     * @param Request $request
     */
    public function payment(Request $request)
    {
        $validator = $request->validate([
            'cardNumber' => 'required|digits:16',
            'price' => 'required|regex:/^\d+(\.\d{1,2})?$/',
        ]);

        if ($validator->fails()) {
            return \InvalidArgumentException('Invalid data');
        }

        $payment = new Payment();
        $payment->cardNumber = $request->get('cardNumber');
        $payment->price = $request->get('price');

        if ($request->has('user')) {

        }
    }
}
