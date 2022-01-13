import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddEdu: boolean = false;
  private subject = new Subject<any>();

  private showAddExp: boolean = false;
  private exp = new Subject<any>();


  constructor() { }
  toggleAddEdu(): void{
    this.showAddEdu = !this.showAddEdu;
    this.subject.next(this.showAddEdu);
  }
  
  onToggle():Observable<any>{
    return this.subject.asObservable(); 

  }

  toggleAddExp(): void{
    this.showAddExp = !this.showAddExp;
    this.exp.next(this.showAddExp);
  }
  
  onToggleExp():Observable<any>{
    return this.exp.asObservable(); 
  }

}



