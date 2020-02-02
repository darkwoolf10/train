<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property mixed position
 * @property mixed baggage
 * @property mixed bedspread
 * @property mixed tea
 * @property User user
 * @package App
 */
class Ticket extends Model
{
    /**
     * @return HasOne
     */
    public function payment(): hasOne
    {
        return $this->hasOne(Payment::class);
    }

    /**
     * @return BelongsTo
     */
    public function route(): BelongsTo
    {
        return $this->belongsTo(Route::class);
    }

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
