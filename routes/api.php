<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TestomonialController;
use App\Http\Controllers\TusController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::get('/posts', [PostController::class, 'index']);
// Route::post('/posts', [PostController::class, 'store']);
Route::middleware('auth:sanctum')->group(function () {
    Route::any('/tus/{any?}', [TusController::class,'any'])->where('any', '.*')->name('tus');
    Route::resource('posts', PostController::class)->except('index');
    Route::resource('categories', CategoryController::class);
    Route::resource('services', ServiceController::class)->except('index');
    Route::resource('portfolios', PortfolioController::class)->except('index');
    Route::resource('testomonials', TestomonialController::class)->except('index');
});

Route::resource('posts', PostController::class)->only('index');
Route::resource('services', ServiceController::class)->only('index');
Route::resource('portfolios', PortfolioController::class)->except('index');
Route::resource('testomonials', TestomonialController::class)->except('index');