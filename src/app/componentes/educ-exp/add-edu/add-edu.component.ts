import { Component, OnInit, Output, EventEmitter, Input, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import {UiService} from '../../../servicios/ui.service';
import {Edu} from '../Edu';
import { MatTableModule } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';



@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent implements OnInit {
  @Input() edu: Edu[]=[];
  @Output() onAddEdu: EventEmitter<Edu> = new EventEmitter();
  @Output() onDeleteEdu: EventEmitter<Edu> = new EventEmitter();
  @Output() onEditEdu: EventEmitter<Edu> = new EventEmitter();


  id:any;
  institucion: string ="";
  fecha: string = "";
  link: string = "";
  titulo: string = "";
  persona_id: any;
  showAddEdu: boolean = false;
  subscription?:Subscription;
  closeAddEdu:boolean=!this.showAddEdu;
  MatTable:any;
  displayedColumns: string[] = ['link', 'institucion', 'fecha', 'titulo', 'select'];
    
    

    

  constructor(   private uiService : UiService,   private portfolioService:PortfolioService, private router:Router

    ) { this.portfolioService.obtenerEdu().subscribe(edu =>{console.log(edu);
      this.edu=edu;
   });
    this.uiService.toggleAddEdu();this.subscription = this.uiService.onToggle()
    .subscribe(value => this.showAddEdu = value)

  }

  ngOnInit(): void {
  }
onSubmit() {
  console.log("submitedu", this.edu);
 const {id,institucion, fecha, link, titulo, persona_id} = this
  const newEdu = {id, institucion, fecha, link, titulo, persona_id}

  this.onAddEdu.emit(newEdu);
  this.portfolioService.addEdu(newEdu).subscribe(dato =>{console.log(dato);
  }) ;
  
  }
  
  onDelete(edu:Edu){
    console.log("deledu");
    this.onDeleteEdu.emit(edu);
    this.deleteEdu(edu);
 }


  onEdit(id:any){

    const { institucion, fecha, link, titulo, persona_id} = this
    const newEdu = {id, institucion, fecha, link, titulo, persona_id}
    console.log("editedu");
    this.showAddEdu= true;
    this.onEditEdu.emit(newEdu);
    
    this.portfolioService.editEdu(newEdu).subscribe(edu =>{console.log(edu);
    }) ;
  }
  
  
    deleteEdu( edu:Edu):void{
     console.log(edu.id );this.edu=this.edu.filter(e=> e !== edu);
      this.portfolioService.deleteEdu(edu).subscribe(); 
     }
   
   }
  
    

function newEdu(newEdu: any) {
  throw new Error('Function not implemented.');
}
   


