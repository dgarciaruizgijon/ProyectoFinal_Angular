<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('criticas', function (Blueprint $table) {
            $table->id();
            
            // nuestras columnas personalizada:
            $table->string('pelicula_id');
            $table->string('titulo');
            $table->text('comentario');
            $table->integer('puntuacion');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('criticas');
    }
};