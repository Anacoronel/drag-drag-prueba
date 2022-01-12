import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import {UiService} from '../../../servicios/ui.service';
import {Exp}from '../Exp'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() exp: Exp[] = [];

  @Output() onAddExp: EventEmitter<Exp> = new EventEmitter();
  
  id: any;
  empresa: string="";
  date: string = "";
  link: string = "";
  puesto: string= "";
  persona_id: any;

    
  constructor(
    private portfolioService: PortfolioService

  ) { }

  ngOnInit(): void {
  }

  
  onSubmitExp() {
   /* if(this.text.length === 0) {
      alert("Please add a Text!");
      return
   }*/
  
 const {id,empresa, date, link, puesto, persona_id} = this
  const newExp ={id,empresa, date, link, puesto, persona_id}

  this.onAddExp.emit(newExp);

  }




}
