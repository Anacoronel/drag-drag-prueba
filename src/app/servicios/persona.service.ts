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

  deleteAcerca(persona: Persona | number): Observable<Persona> {
    const id = typeof persona === 'number' ? persona : persona.id;
    const url = `${this.apiUrl + '/persona/delete'}/${id}`;
    return this.http.delete<any>(url, httpOptions);

  }










}
