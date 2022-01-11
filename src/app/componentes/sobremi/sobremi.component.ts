import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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