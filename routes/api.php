<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('auth')
    ->middleware('api')
    ->controller(AuthController::class)
    ->group(function () {
        Route::post('login', 'login');
        Route::post('logout', 'logout');
        Route::post('refresh', 'refresh');
        Route::post('me', 'me');
    });

Route::prefix('auth/furniture')
    ->namespace('App\Http\Controllers\Furniture')
    ->middleware(['api', 'jwt.auth'])
    ->group(function () {
        Route::get('/', IndexController::class);
    });

Route::prefix('user')
    ->namespace('App\Http\Controllers\User')
    ->group(function() {
        Route::post('/', StoreController::class);
    });