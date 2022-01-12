import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import {Proy} from '../Proy';
import {Skill} from '../Skill'
@Component({
  selector: 'app-proyectos-skills',
  templateUrl: './proyectos-skills.component.html',
  styleUrls: ['./proyectos-skills.component.css']
})
export class ProyectosSkillsComponent implements OnInit {
  proy:Proy[] = [];
  skill: Skill[]=[];

  constructor(    private portfolioService:PortfolioService
    ) { }

  ngOnInit(): void {
    this.portfolioService.obtenerProy().subscribe(proy =>{console.log(proy);
      this.proy=proy;
   });
  
  this.portfolioService.obtenerSkills().subscribe(skill =>{console.log(skill);
    this.skill=skill;
 });
}
}
