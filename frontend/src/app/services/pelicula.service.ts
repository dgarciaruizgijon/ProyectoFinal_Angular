import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  
  private apiKey = 'TU_API_KEY'; // Clave de la web
  private apiUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  buscarPeliculas(titulo: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?s=${titulo}&apikey=${this.apiKey}`);
  }
}