import { Ubicacion } from './../models/Ubicacion';
import { Persona } from 'src/app/models/Persona';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  apiUrl: string = "http://localhost:8080";


  constructor(private http: HttpClient) { }
  obtenerPersona(): Observable<any[]> {
    return this.http.get<Persona[]>(this.apiUrl + "/persona/");
  }
  getPersona(id: number): Observable<Persona> {
    const url = `${this.apiUrl + 'persona/'}${id}`;
    return this.http.get<Persona>(url);
  }
  addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl + "/persona/new", persona);
  }

  editPersona(persona: Persona): Observable<any> {
    const id = typeof persona === 'number' ? persona : persona.id;

    return this.http.put<any>(`${this.apiUrl + '/persona/edit'}/${id}`, persona, httpOptions);
  }

  deletePersona(persona: Persona | number): Observable<Persona> {
    const id = typeof persona === 'number' ? persona : persona.id;
    const url = `${this.apiUrl + '/persona/delete'}/${id}`;
    return this.http.delete<any>(url, httpOptions);

  }



  obtenerUbicacion(): Observable<any[]> {
    return this.http.get<Ubicacion[]>(this.apiUrl + "/ubicacion/");
  }
  getUbicacion(id: number): Observable<Ubicacion> {
    const url = `${this.apiUrl + 'ubicacion/'}${id}`;
    return this.http.get<Ubicacion>(url);
  }
  addUbicacion(ubicacion: Ubicacion): Observable<Ubicacion> {
    return this.http.post<Ubicacion>(this.apiUrl + "/ubicacion/new", ubicacion);
  }

  editUbicacion(ubicacion: Ubicacion): Observable<any> {
    const id = typeof ubicacion === 'number' ? ubicacion : ubicacion.id;

    return this.http.put<any>(`${this.apiUrl + '/ubicacion/edit'}/${id}`, ubicacion, httpOptions);
  }

  deleteUbicacion(ubicacion: Ubicacion | number): Observable<Ubicacion> {
    const id = typeof ubicacion === 'number' ? ubicacion : ubicacion.id;
    const url = `${this.apiUrl + '/ubicacion/delete'}/${id}`;
    return this.http.delete<any>(url, httpOptions);

  }








}
