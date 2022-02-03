import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import{Acerca} from '../models/Acerca'




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  apiUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  obtenerAcerca(): Observable<any[]> {
    return this.http.get<Acerca[]>(this.apiUrl + "/acerca/");
  }
  getAcerca(id: number): Observable<Acerca> {
    const url = `${this.apiUrl + 'acerca/'}${id}`;
    return this.http.get<Acerca>(url);
  }
  addAcerca(acerca: Acerca): Observable<Acerca> {
    return this.http.post<Acerca>(this.apiUrl + "/acerca/new", acerca);
  }

  editAcerca(acerca: Acerca): Observable<any> {
    const id = typeof acerca === 'number' ? acerca : acerca.id;

    return this.http.put<any>(`${this.apiUrl + '/acerca/edit'}/${id}`, acerca, httpOptions);
  }

  deleteAcerca(acerca: Acerca | number): Observable<Acerca> {
    const id = typeof acerca === 'number' ? acerca : acerca.id;
    const url = `${this.apiUrl + '/acerca/delete'}/${id}`;
    return this.http.delete<any>(url, httpOptions);

  }




}
