<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('user')
    ->namespace('App\Http\Controllers\User')
    ->group(function() {
        Route::post('/', StoreController::class);
    });

Route::prefix('furniture')
    ->namespace('App\Http\Controllers\Furniture')
    ->group(function() {
        Route::get('/', IndexController::class);
    });