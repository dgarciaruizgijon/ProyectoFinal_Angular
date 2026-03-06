<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CriticaController;

// Ruta que crea las 5 operaciones del CRUD automáticamente
Route::apiResource('criticas', CriticaController::class);