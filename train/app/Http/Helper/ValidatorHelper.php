<?php

namespace App\Http\Helper;

use Illuminate\Support\Facades\Validator;

class ValidatorHelper
{
    public function returnBadResponse(Validator $validator)
    {
        if($validator->fails()){
            return response()->json([
                'error' => $validator->messages()
            ], 400);
        }
    }
}
