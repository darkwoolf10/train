<?php

namespace App\Console\Commands;

use App\User;
use Illuminate\Console\Command;
use Laratrust\Models\LaratrustRole;

class CreateAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create-role:admin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create admin user with role admin';

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
        $admin->name         = 'admin';
        $admin->display_name = 'User Administrator'; // optional
        $admin->description  = 'User is allowed to manage and edit other users'; // optional
        $admin->save();

        $user = User::where('email', 'root@gmail.com')->first();
        $user->attachRole($admin);
    }
}
