import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import{Acercade} from '../models/Acercade';




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
    return this.http.get<Acercade[]>(this.apiUrl + "/acerca/");
  }
  getAcerca(id: number): Observable<Acercade> {
    const url = `${this.apiUrl + 'acerca/'}${id}`;
    return this.http.get<Acercade>(url);
  }
  addAcerca(acercade: Acercade): Observable<Acercade> {
    return this.http.post<Acercade>(this.apiUrl + "/acerca/new", acercade);
  }

  editAcerca(acercade: Acercade): Observable<any> {
    const id = typeof acercade === 'number' ? acercade : acercade.id;

    return this.http.put<any>(`${this.apiUrl + '/acerca/edit'}/${id}`, acercade, httpOptions);
  }

  deleteAcerca(acercade: Acercade | number): Observable<Acercade> {
    const id = typeof acercade === 'number' ? acercade : acercade.id;
    const url = `${this.apiUrl + '/acerca/delete'}/${id}`;
    return this.http.delete<any>(url, httpOptions);

  }




}
