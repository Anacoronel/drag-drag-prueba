import { Component, OnInit,  Inject, Injectable, Input, TemplateRef } from '@angular/core';

import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import {Proy} from '../../models/Proy';
import {Skill} from '../../models/Skill';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-proyectos-skills',
  templateUrl: './proyectos-skills.component.html',
  styleUrls: ['./proyectos-skills.component.css']
})
export class ProyectosSkillsComponent implements OnInit {
  @Input() proy: Proy[]= [];
  @Input() skill: Skill[]= [];
  skills:any;
  proyectos: any;
  id:any;
  color: ThemePalette="primary";
  mode: ProgressSpinnerMode = 'determinate';
  value:any;
  link:string="";
  date:string=";"
  texto:string="";
  persona_id: any;
  url: string ="";
  modalRef?: BsModalRef;


  constructor(    private portfolioService:PortfolioService, private FormBuilder: FormBuilder,
  private modalService: BsModalService)

    {}
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
      
    }

  ngOnInit(): void {
    this.portfolioService.obtenerProy().subscribe(proy =>{console.log(proy);
      this.proy=proy;
   });
  
  this.portfolioService.obtenerSkills().subscribe(skill =>{console.log(skill);
    this.skill=skill;
 });
}

editarProy(proy:Proy){

}
 deleteProy(proy:Proy){

 }

 agregarProy(){

 }
editarSkill(skill:Skill){

}
deleteSkill(skill:Skill){

}
agregarSkill(){
  
}

}


