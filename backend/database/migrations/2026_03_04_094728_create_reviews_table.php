<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('reviews', function (Blueprint $table) {
        $table->id(); // Crea la columna 'id'
        $table->string('titulo_pelicula'); // Texto corto para el título
        $table->integer('puntuacion'); // Número para la nota
        $table->text('comentario')->nullable(); // Texto largo
        $table->timestamps(); // Crea automáticamente
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
