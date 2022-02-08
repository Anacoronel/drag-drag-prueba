import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler, HttpHeaderResponse, HttpParams} from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Exp } from '../models/Exp';
import { Edu } from '../models/Edu';
import {Skill} from '../models/Skill';
import {Proy} from '../models/Proy';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}




@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  apiUrl:string ="http://localhost:8080";
  
  constructor(private http:HttpClient) {}
  
  
  obtenerDatos():Observable<any>{
  return this.http.get(this.apiUrl + "/persona/");
  }
  obtenerEdu():Observable<any[]>{
    return this.http.get<Edu[]>(this.apiUrl + "/educacion/");
  }
  getEdu(id: number): Observable<Edu>{
    const url = `${this.apiUrl+'educacion/'}${id}`;
    return this.http.get<Edu>(url);
  }
  

   


 obtenerExp():Observable<any[]>{
  return this.http.get<Exp[]>(this.apiUrl + "/experiencia/");
}

obtenerProy():Observable<Proy[]>{
  return this.http.get<Proy[]>(this.apiUrl + "/proyecto/");
 }

 obtenerSkills():Observable<Skill[]>{
  return this.http.get<Skill[]>(this.apiUrl + "/skill/");
 }

 

addEdu(edu:Edu): Observable<Edu>{
  return this.http.post<Edu>(this.apiUrl+"/educacion/new",edu);
}




editEdu( edu:Edu|number): Observable<Edu>{
 const id =  typeof edu === 'number' ? edu : edu.id;
 return this.http.put<Edu>(`${this.apiUrl + '/educacion/edit'}/${id}`, edu, httpOptions);
}


deleteEdu(edu: Edu | number): Observable<Edu> {
  const id = typeof edu === 'number' ? edu : edu.id;
  const url = `${this.apiUrl+ '/educacion/delete'}/${id}`;
  return this.http.delete<Edu>(url, httpOptions);
   
  }


deleteExp(exp:Exp | number):Observable<any>{
  const id = typeof exp === 'number' ? exp : exp.id;

  const url = `${this.apiUrl+ '/educacion/delete'}/${id}`;
    return this.http.delete<Exp>(url, httpOptions);
}












}


  

