<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReviewController;

// Ruta que crea las 5 operaciones del CRUD automáticamente
Route::apiResource('reviews', ReviewController::class);