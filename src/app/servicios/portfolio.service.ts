import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler, HttpHeaderResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Exp } from '../componentes/educ-exp/Exp';
import { Edu } from '../componentes/educ-exp/Edu';
import {Skill} from '../componentes/Skill';
import {Proy} from '../componentes/Proy';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  apiUrl:string ='http://localhost:8080';

  constructor(private http:HttpClient) {}
  
  obtenerDatos():Observable<any>{
  return this.http.get(this.apiUrl + "/persona");
  }

  obtenerEdu():Observable<Edu[]>{
    return this.http.get<Edu[]>(this.apiUrl + "/educacion");
  }
 obtenerExp():Observable<Exp[]>{
 return this.http.get<Exp[]>(this.apiUrl + "/experiencia");
}

obtenerProy():Observable<Proy[]>{
  return this.http.get<Proy[]>(this.apiUrl + "/proyecto");
 }
 obtenerSkills():Observable<Skill[]>{
  return this.http.get<Skill[]>(this.apiUrl + "/skill");
 }

 deleteEdu(edu: Edu): Observable<Edu>{
  const url = `${this.apiUrl+ "/educacion/delete"}/${edu.id}`
  return this.http.delete<Edu>(url)

}

 /* getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  
  }
  
  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }
  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  
  }*/
  
}
