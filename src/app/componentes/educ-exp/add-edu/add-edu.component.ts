import { Component, OnInit, Output, EventEmitter, Input, NgModule } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import {UiService} from '../../../servicios/ui.service';
import {Edu} from '../../../models/Edu';
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
  agregarEdu: boolean = false;
  edit: boolean = false;

  subscription?:Subscription;
  closeAddEdu:boolean=!this.showAddEdu;
  MatTable:any;
  displayedColumns: string[] = ['id','link', 'institucion', 'fecha', 'titulo', 'select'];
    
    

    

  constructor(   private uiService : UiService,   private portfolioService:PortfolioService, private router:Router,  public route:ActivatedRoute

    ) { this.portfolioService.obtenerEdu().subscribe(edu =>{console.log(edu);
      this.edu=edu;
   });
   this.portfolioService.getEdu(this.id).subscribe(edu =>{console.log(edu);
    this.id=edu.id;
   });
    this.uiService.toggleAddEdu();this.subscription = this.uiService.onToggle()
    .subscribe(value => this.showAddEdu = value);

    this.uiService.toggleAgregarEdu();this.subscription = this.uiService.onToggle()
    .subscribe(value => this.agregarEdu = value)


  }

  ngOnInit(): void {
    /*this.route.paramMap.subscribe((paramMap: ParamMap)=>{  
  
      if(paramMap.has('id')){  
        this.edit=true;  
        this.id = paramMap.get('id');  
        this.id = this.portfolioService.getEdu(this.id);  

      }
    });   
    const id = +this.route.snapshot.params['id'];  */


  }
onSubmit() {
  console.log("submitedu", this.edu);
 const {id,institucion, fecha, link, titulo, persona_id} = this
  const newEdu = {id, institucion, fecha, link, titulo, persona_id}
  this.agregarEdu = true;


  this.onAddEdu.emit(newEdu);
  this.portfolioService.addEdu(newEdu).subscribe(dato =>{console.log(dato);
  }) ;
}

agregar(edu:Edu){
    this.agregarEdu = true;
    this.id = edu.id;
    this.institucion =edu.institucion;
    this.fecha = edu.fecha;
    this.titulo = edu.titulo;
    this.link = edu.link;
    this.onAddEdu.emit(edu);
    this.portfolioService.addEdu(edu).subscribe(); 

    }
    



  onDelete(edu:Edu){
    console.log("deledu");
    this.onDeleteEdu.emit(edu);
    this.deleteEdu(edu);
 }


 onEdit(){

  const { id, institucion, fecha, link, titulo, persona_id} = this
  const newEdu = {id, institucion, fecha, link, titulo, persona_id}
  this.onEditEdu.emit(newEdu);
  console.log("edit " + id);
    this.edEdu(newEdu);

    

  }

    /*const { id,institucion, fecha, link, titulo, persona_id} = this
    const newEdu = {id, institucion, fecha, link, titulo, persona_id}
    console.log("editedu" , edu.id);
    this.showAddEdu= true;
    this.edit=true;
    this.onEditEdu.emit(newEdu);

    this.portfolioService.editEdu(newEdu).subscribe(edu =>{console.log(edu);
    }) ;*/
    
  
    edEdu( edu:Edu):void{
      this.edu=this.edu.filter(e=> e !== edu);
       console.log(edu.id );
        this.portfolioService.editEdu(edu).subscribe(); 
        this.router.navigate(['/add-edu']);

       }
  
    deleteEdu( edu:Edu):void{
     console.log(edu.id );this.edu=this.edu.filter(e=> e !== edu);
      this.portfolioService.deleteEdu(edu).subscribe(); 
     }
     editar(edu: Edu) {
      this.showAddEdu = true;
      this.edit=true;
      this.id = edu.id;
      this.institucion =edu.institucion;
      this.fecha = edu.fecha;
      this.titulo = edu.titulo;
      this.link = edu.link;
      this.portfolioService.editEdu(edu).subscribe(); 

      }
      
   }
  
    




