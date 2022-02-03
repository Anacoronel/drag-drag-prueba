import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Idioma } from '../models/Idioma';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  apiUrl: string = "http://localhost:8080";


  constructor(private http: HttpClient) { }
  obtenerIdioma(): Observable<any[]> {
    return this.http.get<Idioma[]>(this.apiUrl + "/idioma/");
  }
  getIdioma(id: number): Observable<Idioma> {
    const url = `${this.apiUrl + 'idioma/'}${id}`;
    return this.http.get<Idioma>(url);
  }
  addIdioma(acerca: Idioma): Observable<Idioma> {
    return this.http.post<Idioma>(this.apiUrl + "/idioma/new", idioma);
  }

  editIdioma(idioma: Idioma): Observable<any> {
    const id = typeof idioma === 'number' ? idioma : idioma.id;

    return this.http.put<any>(`${this.apiUrl + '/idioma/edit'}/${id}`, idioma, httpOptions);
  }

  deleteIdioma(idioma: Idioma | number): Observable<Idioma> {
    const id = typeof idioma === 'number' ? idioma : idioma.id;
    const url = `${this.apiUrl + '/idioma/delete'}/${id}`;
    return this.http.delete<any>(url, httpOptions);

  }




}
function idioma<T>(arg0: string, idioma: any): Observable<Idioma> {
  throw new Error('Function not implemented.');
}

