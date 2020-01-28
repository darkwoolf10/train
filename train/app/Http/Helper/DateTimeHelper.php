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
        return Carbon::parse($date)
                ->addHour()
                ->addHour()
                ->format('Y/m/d') . ' ' . Carbon::parse($time)->format('H:i');
    }
}
