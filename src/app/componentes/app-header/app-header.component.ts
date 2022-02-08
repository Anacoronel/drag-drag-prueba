import { HeaderService } from './../../servicios/header.service';
import { Component, Input, OnInit } from '@angular/core';
import { Acercade } from '../../models/Acercade';
import{Ubicacion} from '../../models/Ubicacion';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent implements OnInit {

   acercade:Acercade[]=[]
  
    persona:Persona[]=[]

  id:any;
 nombre:string="";
 fotoperfil:string="";
 texto:string=";"
 descripcion:string="";
 fotoback:string="";
 mail:string="";
 ciudad:string="";
 pais:string="";



  

  constructor(private headerService: HeaderService, private personaService:PersonaService) {


    this.headerService.obtenerAcerca().subscribe((acercade) => {
      console.log(acercade);
      this.acercade=acercade;
    });

    this.personaService.obtenerPersona().subscribe((persona) => {
      console.log(persona);
      this.persona=persona;
    });

   

  }
  ngOnInit(): void {

    

   
  }
}
