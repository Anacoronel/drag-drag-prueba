import { Component, Input, OnInit } from '@angular/core';
import { Edu } from '../../models/Edu';
import { Exp } from '../../models/Exp';
import {PortfolioService} from './../../servicios/portfolio.service'

@Component({
  selector: 'app-educ-exp',
  templateUrl: './educ-exp.component.html',
  styleUrls: ['./educ-exp.component.css']
})
export class EducExpComponent implements OnInit {
  @Input() edu: Edu[]=[];

  exp:Exp[] = [];
  
  id:any;
  institucion: string ="";
  fecha: string = "";
  link: string = "";
  titulo: string = "";
  empresa:string=";"
  date: string="";
  persona_id: any;
  
  constructor(
    private portfolioService:PortfolioService,
  ) { }

  ngOnInit(): void {
    
  
  this.portfolioService.obtenerEdu().subscribe(edu =>{console.log(edu);
    this.edu=edu;
 });
 this.portfolioService.obtenerExp().subscribe(exp =>{console.log(exp);
  this.exp=exp;
})}
deleteEdu(edu:Edu){
  
   console.log(edu)
   this.portfolioService.deleteEdu(edu).subscribe(()=>{
   this.edu = this.edu.filter( t => t.id !== edu.id) 
    
  })

}
  
   
    
    deleteExp(id:number){
      this.portfolioService.deleteExp(id).subscribe((dato)=>{
        console.log(dato);
         this.portfolioService.obtenerExp();
      })
  
    }
    editEdu(edu:Edu){
      this.portfolioService.editEdu(edu).subscribe((edu)=>{
        console.log(edu);
        this.portfolioService.obtenerEdu();

        

      })
    }


}
