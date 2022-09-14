<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ConnectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $people = json_decode(file_get_contents(storage_path() . "/socialGraph.json"), true);
        $connections = [];
        foreach ($people as $person) {
            foreach ($person['connections'] as $connection) {
                $connections[] = [
                    'person_id' => $person['id'],
                    'connection_id' => $connection
                ];
            }
        }
        DB::table('connections')->insert($connections);
    }
}
