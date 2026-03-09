import { Component, OnInit } from '@angular/core';
import { CriticaService } from '../services/critica.service';

@Component({
  selector: 'app-mis-criticas',
  standalone: false,
  templateUrl: './mis-criticas.component.html',
  styleUrl: './mis-criticas.component.scss'
})
export class MisCriticasComponent implements OnInit {
  // Guardar la lista de críticas que nos devuelva laravel
  criticas: any[] = [];

  constructor(private criticaService: CriticaService) {}

  // Para que se ejecuta automáticamente al abrir esta pantalla
  ngOnInit(): void {
    this.cargarCriticas();
  }

  cargarCriticas() {
    this.criticaService.getCriticas().subscribe({
      next: (datos) => {
        this.criticas = datos;
      },
      error: (err) => {
        console.error('Error al cargar las críticas:', err);
      }
    });
  }

  eliminarCritica(id: number) {
    // Preguntamos al usuario si está seguro para no borrar por accidente
    if (confirm('¿Estás seguro de que quieres borrar esta crítica?')) {
      this.criticaService.borrarCritica(id).subscribe({
        next: () => {
          alert('Crítica eliminada correctamente');
          // Volvemos a cargar la lista para que desaparezca visualmente
          this.cargarCriticas(); 
        },
        error: (err) => {
          console.error('Error al borrar:', err);
          alert('Hubo un error al intentar borrar la crítica.');
        }
      });
    }
  }
}