import { HeaderService } from './../../servicios/header.service';
import { Component, Input, OnInit } from '@angular/core';
import { Acerca } from 'src/app/models/Acerca';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent implements OnInit {

  @Input() acerca :Acerca[]=[];
  @Input() persona :Persona[]=[];

  portfolio: any;
  ubicacion: any;
  ciudad:any;
  pais: any;
  fotoperfil:string="";
  fotoback:string="";
  nombre:string="";
  mail:string="";
  descripcion:string="";



  

  constructor(private headerService: HeaderService, private personaService:PersonaService) {


    this.headerService.obtenerAcerca().subscribe((acerca) => {
      console.log(acerca);
      this.acerca=acerca;
    });

    this.personaService.obtenerPersona().subscribe((persona) => {
      console.log(persona);
      this.persona=persona;
    });


  }
  ngOnInit(): void {

    

   
  }
}
