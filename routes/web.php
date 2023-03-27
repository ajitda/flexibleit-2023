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

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
// Route::get('/blogs', function () {
//     return view('blog');
// });
Route::group([ 'prefix' => 'account', 'middleware'=>'auth'], function () {
    Route::get('/', function () {
        return view('home');
    })->name("blog");
    Route::get('/{any}', function () {
        return view('home');
    })->where('any','.*');
});

// Route::group([ 'prefix' => 'blogs'], function () {
    Route::get('/', function () {
        return view('index');
    })->name("blog");
    Route::get('/{any}', function () {
        return view('index');
    })->where('any','.*');
// });

// Route::get('/', function () {
//     return view('blog');
// });

// Route::resource('blogs', BlogController::class);

// Route::get('/home3', function () {
//     return view('blog');
// });