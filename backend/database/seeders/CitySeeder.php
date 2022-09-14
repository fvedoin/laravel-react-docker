<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $people = json_decode(file_get_contents(storage_path() . "/socialGraph.json"), true);
        $cities = [];
        foreach ($people as $person) {
            foreach ($person['cities'] as $key => $value) {
                $cities[] = [
                    'person_id' => $person['id'],
                    'name' => $key,
                    'rating' => $value,
                ];
            }
        }
        DB::table('cities')->insert($cities);
    }
}
