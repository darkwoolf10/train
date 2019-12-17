<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Laratrust\Models\LaratrustRole;

class CreateUserRole extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create-role:user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create user role';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $admin = new LaratrustRole();
        $admin->name         = 'user';
        $admin->display_name = 'User';
        $admin->description  = 'User role';
        $admin->save();
    }
}
