<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::table('stations')->insert([
            [
                'city' => 'Cherkassy',
                'name' => 'Cherkassy',
                'positions' => '-33.861034, 151.171936',
            ],
            [
                'city' => 'Kiev',
                'name' => 'Kiev',
                'positions' => '-33.861034, 151.171936',
            ],
            [
                'city' => 'Lviv',
                'name' => 'Lviv',
                'positions' => '-33.861034, 151.171936',
            ],
            [
                'city' => 'Odessa',
                'name' => 'Odessa',
                'positions' => '-33.861034, 151.171936',
            ],
        ]);
    }
}
