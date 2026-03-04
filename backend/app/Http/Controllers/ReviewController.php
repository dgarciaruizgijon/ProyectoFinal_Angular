<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    // Devuelve las críticas
    public function index()
    {
        $reviews = Review::all();
        return response()->json($reviews, 200);
    }

    // Guarda una nueva crítica
    public function store(Request $request)
    {
        // Primero validamos que Angular nos envíe los datos bien
        $request->validate([
            'titulo_pelicula' => 'required|string',
            'puntuacion' => 'required|integer|min:1|max:10'
        ]);

        // Creamos la crítica y la guardamos en la variable $review
        $review = Review::create($request->all());

        // Devolvemos la crítica recién creada
        return response()->json($review, 201);
    }

    // Devuelve una crítica buscando por su id
    public function show($id)
    {
        $review = Review::find($id);

        // Si no existe, devolvemos un error 404
        if (!$review) {
            return response()->json(['mensaje' => 'Crítica no encontrada'], 404);
        }

        return response()->json($review, 200);
    }

    // 4. Modifica una crítica existente
    public function update(Request $request, $id)
    {
        $review = Review::find($id);

        if (!$review) {
            return response()->json(['mensaje' => 'Crítica no encontrada'], 404);
        }

        // Actualizamos con los datos nuevos que vengan en el $request
        $review->update($request->all());

        return response()->json($review, 200);
    }

    // Elimina una crítica
    public function destroy($id)
    {
        $review = Review::find($id);

        if (!$review) {
            return response()->json(['mensaje' => 'Crítica no encontrada'], 404);
        }

        $review->delete();

        // Devolvemos un confirmando que se borró
        return response()->json(['mensaje' => 'Crítica eliminada con éxito'], 200);
    }
}
