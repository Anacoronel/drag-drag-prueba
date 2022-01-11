import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import {UiService} from '../../../servicios/ui.service';
import {Edu} from '../Edu';
import {Exp}from '../Exp'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() exp: Exp[] = [];
  @Input() edu: Edu[] = [];

  @Output() onAddEdu: EventEmitter<Edu> = new EventEmitter();
  @Output() onAddExp: EventEmitter<Exp> = new EventEmitter();



  id: any;
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription?:Subscription;

  constructor(
    private uiService: UiService

  ) { }

  ngOnInit(): void {
  }

  onSubmitEdu() {
    if(this.text.length === 0) {
      alert("Please add a Text!");
      return
   }
  
  const {id,text, day, reminder} = this
  const newEdu ={id,text, day, reminder}

  this.onAddEdu.emit(newEdu);

  }
  onSubmitExp() {
    if(this.text.length === 0) {
      alert("Please add a Text!");
      return
   }
  
  const {id,text, day, reminder} = this
  const newExp ={id,text, day, reminder}

  this.onAddExp.emit(newExp);

  }




}
