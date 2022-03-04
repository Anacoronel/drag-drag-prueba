import { Component, OnInit,  Inject, Injectable, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

import { PortfolioService } from 'src/app/servicios/portfolio.service';
import {Proy} from '../../models/Proy';
import {Skill} from '../../models/Skill';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-proyectos-skills',
  templateUrl: './proyectos-skills.component.html',
  styleUrls: ['./proyectos-skills.component.css']
})
export class ProyectosSkillsComponent implements OnInit {
  @Input() proy: Proy[]= [];
  @Output() onAddProy: EventEmitter<Proy> = new EventEmitter();
  @Output() onDeleteProy: EventEmitter<Proy> = new EventEmitter();
  @Output() onEditProy: EventEmitter<Proy> = new EventEmitter();

  @Input() skill: Skill[]= [];
  @Output() onAddSkill: EventEmitter<Skill> = new EventEmitter();
  @Output() onDeleteSkill: EventEmitter<Skill> = new EventEmitter();
  @Output() onEditSkill: EventEmitter<Skill> = new EventEmitter();

  skills:any;
  proyectos: any;
  id:any;
  value:any;
  link:string="";
  date:string=";"
  texto:string="";
  persona_id: any;
  url: string ="";
  modalRef?: BsModalRef;
  isLogged=false;


  constructor(    private portfolioService:PortfolioService, private FormBuilder: FormBuilder,
  private modalService: BsModalService, private tokenService:TokenService)

    {}
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);    
    }
    openModal1(template1: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template1);
    }
    openModal2(template2: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template2);
    }
    openModalsk(templatesk: TemplateRef<any>) {
      this.modalRef = this.modalService.show(templatesk);
    }

    openModalsked(templatesked: TemplateRef<any>) {
      this.modalRef = this.modalService.show(templatesked);
    }
    openModalskdel(templateskdel: TemplateRef<any>) {
      this.modalRef = this.modalService.show(templateskdel);
    }
  ngOnInit(): void {
    this.portfolioService.obtenerProy().subscribe(proy =>{console.log(proy);
      this.proy=proy;
   });
  
  this.portfolioService.obtenerSkills().subscribe(skill =>{console.log(skill);
    this.skill=skill;
 });
 if (this.tokenService.getToken()){
  this.isLogged=true;
}
}



editarProy(proy:Proy){
  
    console.log('edit ' + proy.id);
  
    this.id = proy.id;
    this.date = proy.date;
    this.link = proy.link;
    this.texto = proy.texto;
   this.persona_id = proy.persona_id;
  
    this.onEditProy.emit(proy);
    this.portfolioService.editProy(proy).subscribe((proy) => {});
    this.modalService.hide();
  
    this.portfolioService.obtenerProy();
  }
  


 deleteProy(proy:Proy){
  console.log(proy.id);
  this.proy = this.proy.filter((e) => e !== proy);
  this.portfolioService.deleteProy(proy).subscribe();
  this.modalService.hide();
 }

 agregarProy(){
  console.log('submitproy', this.proy);
  const { id, date, link, texto, persona_id } = this;
  const newProy = { id, date, link, texto, persona_id };

  this.onAddProy.emit(newProy);
  this.portfolioService.addProy(newProy).subscribe((dato) => {
    console.log(dato);
  });
  this.portfolioService.obtenerProy();
  this.modalService.hide();

 }
editarSkill(skill:Skill){
  console.log('edit ' + skill.id);
  
  this.id = skill.id;
  this.date = skill.texto;
  this.link = skill.value;
 this.persona_id = skill.persona_id;

  this.onEditSkill.emit(skill);
  this.portfolioService.editSkill(skill).subscribe((Skill) => {});
  this.modalService.hide();

  this.portfolioService.obtenerProy();
}
deleteSkill(skill:Skill){
  console.log(skill.id);
  this.skill = this.skill.filter((e) => e !== skill);
  this.portfolioService.deleteSkills(skill).subscribe();
  this.modalService.hide();
}
agregarSkill(){
  console.log('submitskill', this.skill);
  const { id, texto, value, persona_id } = this;
  const newSkill = { id, texto, value, persona_id };

  this.onAddSkill.emit(newSkill);
  this.portfolioService.addSkill(newSkill).subscribe((dato) => {
    console.log(dato);
  });
  this.portfolioService.obtenerSkills();
  this.modalService.hide();
}

}


