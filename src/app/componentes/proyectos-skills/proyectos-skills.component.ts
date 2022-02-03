import { Component, OnInit,  Inject, Injectable, Input } from '@angular/core';

import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import {Proy} from '../../models/Proy';
import {Skill} from '../../models/Skill'
@Component({
  selector: 'app-proyectos-skills',
  templateUrl: './proyectos-skills.component.html',
  styleUrls: ['./proyectos-skills.component.css']
})
export class ProyectosSkillsComponent implements OnInit {
 @Input() proy:Proy[] = [];
  @Input() skill: Skill[]=[];
  skills:any;
  proyectos: any;
  id:any;
  color: ThemePalette="primary";
  mode: ProgressSpinnerMode = 'determinate';
  value:string="";
  link:string="";
  date:string=";"
  texto:string="";
  persona_id: any;
  url: string ="";
  

  constructor(    private portfolioService:PortfolioService)

  
  
    {}
   

  ngOnInit(): void {
    this.portfolioService.obtenerProy().subscribe(proy =>{console.log(proy);
      this.proy=proy;
   });
  
  this.portfolioService.obtenerSkills().subscribe(skill =>{console.log(skill);
    this.skill=skill;
 });
}

 
}