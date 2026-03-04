<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    // Para que se guarden desde la api
    protected $fillable = ['titulo_pelicula', 'puntuacion', 'comentario'];
}
