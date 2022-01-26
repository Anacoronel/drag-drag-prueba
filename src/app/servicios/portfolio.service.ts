import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler, HttpHeaderResponse, HttpParams} from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Exp } from '../componentes/educ-exp/Exp';
import { Edu } from '../componentes/educ-exp/Edu';
import {Skill} from '../componentes/Skill';
import {Proy} from '../componentes/Proy';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}




@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  apiUrl:string ='http://localhost:8080';
  
  constructor(private http:HttpClient) {}
  
  
  obtenerDatos():Observable<any>{
  return this.http.get(this.apiUrl + "/persona/");
  }
  obtenerEdu():Observable<any[]>{
    return this.http.get<Edu[]>(this.apiUrl + "/educacion/");
  }
 obtenerExp():Observable<Exp[]>{
 return this.http.get<Exp[]>(this.apiUrl + "/experiencia/");
}
obtenerProy():Observable<Proy[]>{
  return this.http.get<Proy[]>(this.apiUrl + "/proyecto/");
 }
 obtenerSkills():Observable<Skill[]>{
  return this.http.get<Skill[]>(this.apiUrl + "/skill/");
 }

 

addEdu(edu:Edu): Observable<Edu>{
  return this.http.post<Edu>(this.apiUrl+'/educacion/new',edu);
}





editEdu( edu:Edu): Observable<any>{
  console.log(edu);
  console.log(this.apiUrl+'/educacion/edit/'+edu.id);
  return this.http.put<any>(`${this.apiUrl + '/educacion/edit/'}${edu.id}`,edu, httpOptions);
}

deleteEdu(edu: Edu | number): Observable<Edu> {
  const id = typeof edu === 'number' ? edu : edu.id;
  const url = `${this.apiUrl+ '/educacion/delete'}/${id}`;

 /*deleteEdu(edu:Edu):Observable<any>{
  const url = `${this.apiUrl+ '/educacion/delete'}/${edu.id}`;*/
  return this.http.delete<any>(url, httpOptions);
   
  }


deleteExp(id:number):Observable<any>{
  const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
}












}


  

