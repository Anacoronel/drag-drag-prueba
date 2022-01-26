import { UiService } from './../../../servicios/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-form-edu',
  templateUrl: './form-edu.component.html',
  styleUrls: ['./form-edu.component.css']
})
export class FormEduComponent implements OnInit {
  id:any;
  institucion: string ="";
  fecha: string = "";
  link: string = "";
  titulo: string = "";
  persona_id: any;
  showAddEdu: boolean = false;
  subscription?:Subscription;
  closeAddEdu:boolean = true;

  constructor(private portfolioService:PortfolioService ,private uiService:UiService ) { 
    this.uiService.toggleAddEdu();this.subscription = this.uiService.onToggle()
    .subscribe(value => this.showAddEdu = value)
  }

  ngOnInit(): void {

  }
  onSubmit(){
    
      
      
  }

}
