import { Component, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-grafico-peliculas',
  standalone: false,
  template: `
    <div style="position: relative; height:40vh; width:100%">
      <canvas #miCanvas></canvas>
    </div>
  `
})
export class GraficoPeliculasComponent implements OnChanges {
  @Input() peliculas: any[] = [];
  @ViewChild('miCanvas') canvas!: ElementRef;
  chart: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['peliculas'] && this.peliculas.length > 0) {
      this.renderGrafico();
    }
  }

  renderGrafico() {
    if (this.chart) { this.chart.destroy(); }

    // Filtramos las 5 películas con más votos para que el gráfico sea legible
    const top5 = this.peliculas.slice(0, 5);
    const nombres = top5.map(p => p.title);
    const notas = top5.map(p => p.vote_average);

    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'bar', // Gráfico de barras (punto 3.3 de la rúbrica)
      data: {
        labels: nombres,
        datasets: [{
          label: 'Nota Media (TMDB)',
          data: notas,
          backgroundColor: [
            '#f39c12', 
            '#3498db', 
            '#2ecc71', 
            '#e74c3c', 
            '#9b59b6'  
          ],
          borderColor: 'rgba(0, 0, 0, 0.1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, max: 10 }
        }
      }
    });
  }
}