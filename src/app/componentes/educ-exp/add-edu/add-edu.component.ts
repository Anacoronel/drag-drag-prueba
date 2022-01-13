import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import {UiService} from '../../../servicios/ui.service';
import {Edu} from '../Edu';


@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent implements OnInit {
  @Input() edu: Edu[] = [];
  @Output() onAddEdu: EventEmitter<Edu> = new EventEmitter();
  @Output() onDeleteEdu: EventEmitter<Edu> = new EventEmitter();


  id: any;
  institucion: string ="";
  date: string = "";
  link: string = "";
  titulo: string = "";
  persona_id: any;
  showAddEdu: boolean = false;
  subscription?:Subscription;


  constructor(     private uiService: UiService
    ) { this.subscription = this.uiService.onToggle()
      .subscribe(value => this.showAddEdu = value)}

  ngOnInit(): void {
  }
onSubmit() {
   // if(this.text.length === 0) {
     // alert("Please add a Text!");
     // return
   //}
  console.log("submitedu");
 const {id,institucion, date, link, titulo, persona_id} = this
  const newEdu = {id, institucion, date, link, titulo, persona_id}

  this.onAddEdu.emit(newEdu);

  }
  onDelete(){
    console.log("deledu");
    this.onDeleteEdu.emit();
  }
}
