import { Component } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { CriticaService } from '../../services/critica.service';

@Component({
  selector: 'app-buscador-peliculas',
  standalone: false,
  templateUrl: './buscador-peliculas.component.html',
  styleUrl: './buscador-peliculas.component.scss'
})
export class BuscadorPeliculasComponent {
  peliculas: any[] = [];
  peliculaSeleccionada: any = null; // Guardar la pelicuka
  mensajeError: string = '';

  // Variable para guardar los datos del formulario temporalmente
  nuevaCritica = {
    pelicula_id: '',
    titulo: '',
    comentario: '',
    puntuacion: 5
  };

  constructor(private peliculaService: PeliculaService, private criticaService: CriticaService) { }

  buscar(termino: string) {
    if (!termino.trim()) return;

    this.peliculaService.buscarPeliculas(termino).subscribe({
      next: (respuesta) => {
        this.peliculas = respuesta.results;

        if (this.peliculas.length === 0) {
          this.mensajeError = 'No se encontraron películas con ese nombre.';
        } else {
          this.mensajeError = '';
        }
      },
      error: (err) => {
        console.error('Error en la búsqueda:', err);
        this.mensajeError = 'Hubo un error al conectar con la base de datos de cine.';
      }
    });
  }

  // Funcion par enviar la crítica al backend
  guardarCritica(pelicula: any) {
    // Rellenamos los datos de la peli automáticamente
    this.nuevaCritica.pelicula_id = pelicula.id.toString();
    this.nuevaCritica.titulo = pelicula.title;

    // Enviamos el POST los datos del formulario
    this.criticaService.crearCritica(this.nuevaCritica).subscribe({
      next: (respuesta) => {
        alert('¡Crítica guardada con éxito en tu base de datos!');
        // Vaciamos el formulario para la siguiente vez
        this.nuevaCritica.comentario = '';
        this.nuevaCritica.puntuacion = 5;
      },
      error: (err) => {
        console.error('Error al guardar en Laravel:', err);
        alert('Error al guardar. ¿Tienes encendido el servidor de Laravel (php artisan serve)?');
      }
    });
  }
}
