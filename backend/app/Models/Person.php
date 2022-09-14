<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
	use HasFactory;

	protected $fillable = [
		'id',
		'firstName',
		'surname',
		'age',
		'gender'
	];

	public function connections()
	{
		return $this->belongsToMany(Person::class, "connections", "person_id", "connection_id");
	}
}
