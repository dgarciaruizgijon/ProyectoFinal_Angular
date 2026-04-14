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
  criticaEditando: any = null;

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

  iniciarEdicion(critica: any) {
    
    this.criticaEditando = { ...critica };
  }

  // Al pulsar el botón Cancelar
  cancelarEdicion() {
    this.criticaEditando = null;
  }

  // Guardar
  guardarEdicion() {
    this.criticaService.actualizarCritica(this.criticaEditando.id, this.criticaEditando).subscribe({
      next: () => {
        alert('¡Crítica actualizada con éxito!');
        this.criticaEditando = null;
        this.cargarCriticas(); // Recargamos la lista para ver los cambios
      },
      error: (err) => {
        console.error('Error al actualizar:', err);
        alert('Hubo un error al intentar editar la crítica.');
      }
    });
  }
}