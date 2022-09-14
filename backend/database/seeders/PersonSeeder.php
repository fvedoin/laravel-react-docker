<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $people = json_decode(file_get_contents(storage_path() . "/socialGraph.json"), true);
        DB::table('people')->insert(array_map(function ($person) {
            return [
                'id' => $person['id'],
                'firstName' => $person['firstName'],
                'surname' => $person['surname'],
                'gender' => $person['gender'],
                'age' => (isset($person['age'])) ? $person['age'] : null
            ];
        }, $people));
    }
}
