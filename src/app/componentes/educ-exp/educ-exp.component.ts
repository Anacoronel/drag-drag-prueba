import { Component, OnInit } from '@angular/core';
import { Edu } from './Edu';
import { Exp } from './Exp';
import {PortfolioService} from './../../servicios/portfolio.service'

@Component({
  selector: 'app-educ-exp',
  templateUrl: './educ-exp.component.html',
  styleUrls: ['./educ-exp.component.css']
})
export class EducExpComponent implements OnInit {
  exp:Exp[] = [];
  edu:Edu[] = [];


  constructor(
    private portfolioService:PortfolioService

  ) { }

  ngOnInit(): void {
    this.portfolioService.obtenerDatos().subscribe(data =>{console.log(data);
      this.portfolioService=data[0];
   });
  }
  /*this.taskService.getTasks().subscribe((tasks) => 
     {this.tasks=tasks}
    );
   */

}
