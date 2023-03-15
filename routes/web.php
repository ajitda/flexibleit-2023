<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/blogs', function () {
    return view('blog');
});

Route::group([ 'prefix' => 'blogs'], function () {
    Route::get('/', function () {
        return view('blog');
    })->name("blog");
    Route::get('/{any}', function () {
        return view('blog');
    })->where('any','.*');
});

Route::get('/', function () {
    return view('blog');
});

// Route::get('/home3', function () {
//     return view('blog');
// });