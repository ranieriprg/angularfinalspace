import { Injectable } from '@angular/core';

import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FinalSpaceService {
  apiUrl = 'https://finalspaceapi.com/api/v0/';

  constructor(private http: HttpClient) {}

  // Método para consumir a API REST utilizando o Axios
  getData(): Observable<any> {
    return new Observable((observer) => {
      axios
        .get('https://finalspaceapi.com/api/v0/')
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  getCharacters(): Observable<Character[]> {
    // Especifique o tipo de dados esperado para a resposta da API como 'Character[]'
    return this.http.get<Character[]>(`${this.apiUrl}/character`).pipe(
      map((response: any) => response as Character[]), // Use 'as' para fazer a conversão de tipo
      catchError(this.handleError)
    );
  }

  // Restante do código do serviço

  private handleError(error: any): Observable<any> {
    console.error('Ocorreu um erro:', error);
    return throwError(error);
  }
}
