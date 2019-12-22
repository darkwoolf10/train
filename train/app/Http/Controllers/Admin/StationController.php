<?php

namespace App\Http\Controllers\Admin;

use App\Station;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Validator;

/**
 * ::TODO Make created stations on front and back
 * @package App\Http\Controllers\Admin
 */
class StationController
{
    /**
     * @var Station
     */
    private $station;

    public function __construct(
        Station $station
    ) {
        $this->station = $station;
    }

    public function store()
    {
        $validator = Validator::make(Request::all(),[
            'city' => 'required',
            'position' => 'required',
            'name' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'error' => $validator->messages()
            ], 400);
        }

        $this->station->setCity();
        $this->station->setPosition();
        $this->station->setName();
        $this->station->save();
    }
}
