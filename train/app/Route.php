<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property float price
 * @property \DateTime departure_time
 * @property \DateTime arrival_time
 * @property mixed from
 * @property mixed to
 * @property STRING train_number
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

    /**
     * @return hasMany
     */
    public function tickets(): hasMany
    {
        return $this->hasMany(Ticket::class);
    }
}
