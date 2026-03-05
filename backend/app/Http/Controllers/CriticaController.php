<?php

namespace App\Http\Controllers;

use App\Models\Critica;
use Illuminate\Http\Request;

class CriticaController extends Controller
{
    // 1. Listar todas (Método GET) para ecuperar todas las críticas de la BD
    public function index()
    {
        return response()->json(Critica::all(), 200);
    }

    // 2. Post para guarda una nueva crítica
    public function store(Request $request)
    {
        // Validamos que nos manden los datos bien
        $request->validate([
            'pelicula_id' => 'required',
            'titulo' => 'required|string',
            'comentario' => 'required|string',
            'puntuacion' => 'required|integer|min:1|max:10',
        ]);

        // Creamos la crítica y la guardamos
        $critica = Critica::create($request->all());
        return response()->json($critica, 201);
    }

    // 3. Get para buscar una crítica por su id
    public function show($id)
    {
        $critica = Critica::find($id);
        if (!$critica) {
            return response()->json(['mensaje' => 'Crítica no encontrada'], 404);
        }
        return response()->json($critica, 200);
    }

    // 4.Put para actualizar una crítica que ya existe
    public function update(Request $request, $id)
    {
        $critica = Critica::find($id);
        if (!$critica) {
            return response()->json(['mensaje' => 'Crítica no encontrada'], 404);
        }

        $critica->update($request->all());
        return response()->json($critica, 200);
    }

    // 5. Delete para borra una crítica
    public function destroy($id)
    {
        $critica = Critica::find($id);
        if (!$critica) {
            return response()->json(['mensaje' => 'Crítica no encontrada'], 404);
        }

        $critica->delete();
        return response()->json(['mensaje' => 'Crítica eliminada correctamente'], 200);
    }
}