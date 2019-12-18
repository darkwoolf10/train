<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property float price
 * @property \DateTime departure_time
 * @property \DateTime arrival_time
 * @package App
 */
class Route extends Model
{
    /**
     * @return BelongsTo
     */
    public function from()
    {
        return $this->belongsTo('App\Station');
    }

    /**
     * @return BelongsTo
     */
    public function to()
    {
        return $this->belongsTo('App\Station');
    }
}
