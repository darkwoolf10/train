<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @package App
 */
class Station extends Model
{
    /**
     * @return HasMany
     */
    public function tickets()
    {
        return $this->hasMany('App\Ticket');
    }
}
