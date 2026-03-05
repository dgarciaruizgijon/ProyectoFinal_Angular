import { Component } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-buscador-peliculas',
  standalone: false,
  templateUrl: './buscador-peliculas.component.html',
  styleUrl: './buscador-peliculas.component.scss'
})
export class BuscadorPeliculasComponent {
  peliculas: any[] = [];
  mensajeError: string = '';

  constructor(private peliculaService: PeliculaService) { }

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
}
