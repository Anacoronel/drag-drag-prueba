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
    
  
  this.portfolioService.obtenerEdu().subscribe(edu =>{console.log(edu);
    this.edu=edu;
 });
 this.portfolioService.obtenerExp().subscribe(exp =>{console.log(exp);
  this.exp=exp;
});}
  /*this.taskService.getTasks().subscribe((tasks) => 
     {this.tasks=tasks}
    );
   */

}
