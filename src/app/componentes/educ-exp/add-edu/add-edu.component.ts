import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

import {Edu} from '../Edu';


@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent implements OnInit {
  @Input() edu: Edu[] = [];
  @Output() onAddEdu: EventEmitter<Edu> = new EventEmitter();

  id: any;
  institucion: string ="";
  date: string = "";
  link: string = "";
  titulo: string = "";
  persona_id: any;

  constructor(    private portfolioService: PortfolioService
    ) { }

  ngOnInit(): void {
  }
onSubmitEdu() {
   // if(this.text.length === 0) {
     // alert("Please add a Text!");
     // return
   //}
  
 const {id,institucion, date, link, titulo, persona_id} = this
  const newEdu = {id, institucion, date, link, titulo, persona_id}

  this.onAddEdu.emit(newEdu);

  }
}
