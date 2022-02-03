import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Edu } from '../../models/Edu';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  @Input() edu: Edu[]=[];
  id:any;
  institucion: string ="";
  fecha: string = "";
  link: string = "";
  titulo: string = "";
  persona_id: any;

  constructor(private portfolioService:PortfolioService) {
    this.portfolioService.obtenerEdu().subscribe(edu =>{console.log(edu);
      this.edu=edu;
   });
   this.portfolioService.getEdu(this.id).subscribe(edu =>{console.log(edu);
    this.id=edu.id;
   });

   }

  ngOnInit(): void {
  }

}
