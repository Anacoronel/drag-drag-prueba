import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import {UiService} from '../../../servicios/ui.service';
import {Edu} from '../Edu';



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


  id: any;
  institucion: string ="";
  fecha: string = "";
  link: string = "";
  titulo: string = "";
  persona_id: any;
  showAddEdu: boolean = false;
  subscription?:Subscription;


  constructor(     private uiService: UiService,  private portfolioService:PortfolioService, private router:Router
    ) { this.subscription = this.uiService.onToggle()
      .subscribe(value => this.showAddEdu = value) }

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
  
  onDelete(){
    console.log("deledu");
    this.onDeleteEdu.emit();
    this.deleteEdu(this.id);
  }
  onEdit(id:number){
    const {institucion, fecha, link, titulo, persona_id} = this
    const newEdu = {id, institucion, fecha, link, titulo, persona_id}
    console.log("editedu");
    this.onEditEdu.emit(newEdu);
    this.portfolioService.editEdu(newEdu).subscribe(dato =>{console.log(dato);
    }) ;
  }
  
  /*this.taskService.getTasks().subscribe((tasks) => 
     {this.tasks=tasks}
    );
   */
    deleteEdu(id: number){
      this.portfolioService.deleteEdu(id).subscribe((edu)=>{
       console.log(edu);
        this.portfolioService.obtenerEdu();
      })
  
    }
    deleteExp(id:number){
      this.portfolioService.deleteExp(id).subscribe((dato)=>{
        console.log(dato);
         this.portfolioService.obtenerExp();
      })
  
    }


}
