<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * @package App
 */
class Ticket extends Model
{
    /**
     * @return HasOne
     */
    public function payment()
    {
        return $this->hasOne('App\Payment');
    }
}
