<?php

namespace App\Http\Helper;

use Carbon\Carbon;

class DateTimeHelper
{
    /**
     * @param string $date
     * @param string $time
     * @return string
     */
    public function formateDateTime(string $date, string $time): string
    {
        return Carbon::parse($date)->format('Y/m/d')
            . ' ' . Carbon::parse($time)->addHour()->addHour()->format('g:i A');
    }
}
