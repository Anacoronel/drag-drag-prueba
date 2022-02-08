import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TransitionCheckState } from '@angular/material/checkbox';
import { Subscription } from 'rxjs';
import {UiService} from '../../../servicios/ui.service';
import  {Exp} from '../../../models/Exp';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() exp:Exp[] = [];

  @Output() onAddExp: EventEmitter<Exp> = new EventEmitter();
  @Output() onDeleteExp: EventEmitter<Exp> =new EventEmitter();
   

  id: any;
  empresa: string="";
  fecha: string = "";
  fechaHasta: string ="";
  link: string = "";
  puesto: string= "";
  persona_id: any;
  showAddExp: boolean = false;
  subscription?:Subscription;

    
  constructor(
    private uiService : UiService

  ) {this.subscription = this.uiService.onToggleExp()
    .subscribe(value => this.showAddExp = value) }
  ngOnInit(): void {
  }

  
  onSubmit() {
   /* if(this.text.length === 0) {
      alert("Please add a Text!");
      return
   }*/console.log("addexp");
  
 const {id,empresa, fecha, fechaHasta, link, puesto, persona_id} = this
  const newExp ={id,empresa, fecha, fechaHasta, link, puesto, persona_id}

  this.onAddExp.emit(newExp);
  }
  onDelete(){
    console.log("delexp");
    this.onDeleteExp.emit();
  }

  }





