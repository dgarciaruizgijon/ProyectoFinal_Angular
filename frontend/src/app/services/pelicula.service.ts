import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiKey = 'b3b42b98163f8df87ce8331e6e05bda2'; 
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  buscarPeliculas(titulo: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/movie?query=${titulo}&api_key=${this.apiKey}&language=es-ES`);
  }
}