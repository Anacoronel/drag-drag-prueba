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
  
  getExp(id: number): Observable<Exp>{
    const url = `${this.apiUrl+'experiencia/'}${id}`;
    return this.http.get<Exp>(url);
  }
   
  getProy(id: number): Observable<Proy>{
    const url = `${this.apiUrl+'proyecto/'}${id}`;
    return this.http.get<Proy>(url);
  }
  getSkill(id: number): Observable<Skill>{
    const url = `${this.apiUrl+'skill/'}${id}`;
    return this.http.get<Skill>(url);
  }

 obtenerExp():Observable<any[]>{
  return this.http.get<Exp[]>(this.apiUrl + "/experiencia/");
}

obtenerProy():Observable<Proy[]>{
  return this.http.get<Proy[]>(this.apiUrl + "/proyecto/");
 }
 addProy(proy:Proy): Observable<Proy>{
  return this.http.post<Proy>(this.apiUrl+"/proyecto/new",proy);
}
editProy( proy:Proy|number): Observable<Proy>{
  const id =  typeof proy === 'number' ? proy : proy.id;
  return this.http.put<Proy>(`${this.apiUrl + '/proyecto/edit'}/${id}`, proy, httpOptions);
 }

 deleteProy(proy: Proy | number): Observable<Proy> {
  const id = typeof proy === 'number' ? proy : proy.id;
  const url = `${this.apiUrl+ '/proyecto/delete'}/${id}`;
  return this.http.delete<Proy>(url, httpOptions);
   
  }

 obtenerSkills():Observable<Skill[]>{
  return this.http.get<Skill[]>(this.apiUrl + "/skill/");
 }

 addSkill(skill:Skill): Observable<Skill>{
  return this.http.post<Skill>(this.apiUrl+"/skill/new",skill);
}

deleteSkills(skill: Skill | number): Observable<Skill> {
  const id = typeof skill === 'number' ? skill : skill.id;
  const url = `${this.apiUrl+ '/skill/delete'}/${id}`;
  return this.http.delete<Skill>(url, httpOptions);
   
  }

editSkill( skill:Skill|number): Observable<Skill>{
  const id =  typeof skill === 'number' ? skill : skill.id;
  return this.http.put<Skill>(`${this.apiUrl + '/skill/edit'}/${id}`, skill, httpOptions);
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

  const url = `${this.apiUrl+ '/experiencia/delete'}/${id}`;
    return this.http.delete<Exp>(url, httpOptions);
}

addExp(exp:Exp): Observable<Exp>{
  return this.http.post<Exp>(this.apiUrl+"/experiencia/new",exp);
}
editExp( exp:Exp|number): Observable<Exp>{
  const id =  typeof exp === 'number' ? exp : exp.id;
  return this.http.put<Exp>(`${this.apiUrl + '/experiencia/edit'}/${id}`, exp, httpOptions);
 }









}


  

