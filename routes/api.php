<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthProviderController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;


Route::post("login", [AuthController::class, 'login']);
Route::post("register", [AuthController::class, 'register']);
Route::post("register2", [AuthController::class, 'register2']);

// Protected routes
Route::middleware(['api', 'auth:api'])->group(function () {
    Route::get('profile', [AuthController::class, 'profile']);
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::post('create-blog', [BlogController::class, 'createBlog']);
Route::get('all-blog-post', [BlogController::class, 'allBlogPost']);
Route::get('get-single-blog/{id}', [BlogController::class, 'getSingleBlog']);
Route::get('get-blog/{id}', [BlogController::class, 'getBlog']);
Route::post('update-blog/{id}', [BlogController::class, 'updateBlog']);
Route::delete('delete-blog/{id}', [BlogController::class, 'deleteBlog']);

Route::get('all-comment/{id}', [CommentController::class, 'allComment']);
Route::post('add-comment', [CommentController::class, 'addComment']);
Route::post('update-comment/{id}', [CommentController::class, 'updateComment']);
Route::delete('delete-comment/{id}', [CommentController::class, 'deleteComment']);

// Route::middleware('api')->group(function () {
//     Route::get('/auth/{provider}/redirect', [AuthProviderController::class, 'redirect']);
//     Route::get('/auth/{provider}/callback', [AuthProviderController::class, 'callback']);
// });


Route::get('/auth/{provider}/redirect', [AuthProviderController::class, 'redirect']);
Route::get('/auth/{provider}/callback', [AuthProviderController::class, 'callback']);








//Route::post('file-upload', [BlogController::class, 'fileUpload']);
