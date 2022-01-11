import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler, HttpHeaderResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  apiUrl:string='http://localhost:8080';

  constructor(private http:HttpClient) {}
  
  obtenerDatos():Observable<any> {
  return this.http.get(this.apiUrl + "/persona");
  }
}
