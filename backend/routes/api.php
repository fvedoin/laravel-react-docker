<?php

use App\Http\Controllers\PersonController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/people', [PersonController::class, 'index']);
Route::get('/people/{id}/direct_friends', [PersonController::class, 'direct_friends']);
Route::get('/people/{id}/friends_of_friends', [PersonController::class, 'friends_of_friends']);
Route::get('/people/{id}/suggestions', [PersonController::class, 'suggestions']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
