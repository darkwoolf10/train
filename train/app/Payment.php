<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @package App
 * @property $cardNumber
 * @property $price
 */
class Payment extends Model
{
    /** @var array  */
    protected $fillable = [
        'price', 'cardNumber',
    ];

    public function ticket()
    {
        return $this->hasOne('App\Ticket');
    }
}
