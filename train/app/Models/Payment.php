<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string cardNumber
 * @property float price
 */
class Payment extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'price', 'cardNumber',
    ];
}
