<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Throwable;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index()
    {
        try {
            $people = Person::withCount('connections')->get();
            return response($people, 200);
        } catch (Throwable $exception) {
            return response($exception->getMessage(), 500);
        }
    }

    public function direct_friends($id)
    {
        try {
            $people = Person::find($id);
            return response($people->connections, 200);
        } catch (Throwable $exception) {
            return response($exception->getMessage(), 500);
        }
    }

    public function friends_of_friends($id)
    {
        try {
            $people = Person::find($id);
            $friends = $people->connections;
            $friendsOfFriends = [];
            foreach ($friends as $friend) {
                $friendsOfFriends = array_merge(
                    $friendsOfFriends,
                    $friend
                        ->connections()
                        ->where('connections.connection_id', '!=', $id)
                        ->get()
                        ->toArray()
                );
            }
            return response($friendsOfFriends, 200);
        } catch (Throwable $exception) {
            return response($exception->getMessage(), 500);
        }
    }

    public function suggestions($id)
    {
        try {
            $person = Person::find($id);
            $friends = $person->connections;
            $friendsOfFriends = [];
            foreach ($friends as $friend) {
                $friendsOfFriends[] = $friend
                    ->connections()
                    ->where('connections.connection_id', '!=', $id)
                    ->get();
            }

            $counter = [];
            foreach ($friendsOfFriends as $friendOfFriend) {
                foreach ($friendOfFriend as $friend) {
                    if ($person->connections->contains($friend)) {
                        continue;
                    }
                    if (array_key_exists($friend->id, $counter)) {
                        $counter[$friend->id]++;
                    } else {
                        $counter[$friend->id] = 1;
                    }
                }
            }

            $suggestions = Person::whereIn(
                'id',
                array_keys(array_filter($counter, function ($item) {
                    return $item >= 2;
                }))
            )->get();

            return response($suggestions, 200);
        } catch (Throwable $exception) {
            return response($exception->getMessage(), 500);
        }
    }
}
