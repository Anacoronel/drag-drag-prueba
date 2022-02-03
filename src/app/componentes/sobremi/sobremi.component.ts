import { Component, Input, OnInit } from '@angular/core';
import { Acercade } from 'src/app/models/Acercade';
import { Idioma } from 'src/app/models/Idioma';
import { HeaderService } from 'src/app/servicios/header.service';
import { IdiomaService } from 'src/app/servicios/idioma.service';


@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
idioma:Idioma[]=[];
acercade:Acercade[]=[];
id:any;
nivel:string="";
texto:string="";
persona_id:any;

  constructor(private headerService: HeaderService, private idiomaService:IdiomaService) {
   
   }

  ngOnInit(): void {
    this.headerService.obtenerAcerca().subscribe((data) => {
      console.log(data);
      this.acercade=data;
    });

    this.idiomaService.obtenerIdioma().subscribe((data) => {
      console.log(data);
      this.idioma=data;
    });


  }
  

}
/*
getTasks():Observable<Task[]>{
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

}

 */