import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CriticaService {
  // Esta es la ruta donde está escuchando tu Laravel
  // private apiUrl = 'http://127.0.0.1:8000/api/criticas';
  private apiUrl = `${environment.apiUrl}/criticas`;

  constructor(private http: HttpClient) { }

  getCriticas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCritica(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  crearCritica(critica: any): Observable<any> {
    return this.http.post(this.apiUrl, critica);
  }

  actualizarCritica(id: number, critica: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, critica);
  }

  borrarCritica(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}