<?php

namespace App;

use Laratrust\Models\LaratrustRole;

class Role extends LaratrustRole
{
    /** @var int  */
    const ADMIN_ROLE = 1;

    /** @var int  */
    const USER_ROLE = 2;
}
