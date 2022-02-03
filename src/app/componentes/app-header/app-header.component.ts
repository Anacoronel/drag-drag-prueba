import { HeaderService } from './../../servicios/header.service';
import { Component, Input, OnInit } from '@angular/core';
import { Acercade } from '../../models/Acercade';
import{Ubicacion} from '../../models/Ubicacion';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { identifierName } from '@angular/compiler';
import { UbicacionService } from 'src/app/servicios/ubicacion.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent implements OnInit {

  @Input() acercade:Acercade[]=[];
  @Input() persona :any[]=[];
  @Input() ubicacion:any[]=[];


 


  

  constructor(private headerService: HeaderService, private personaService:PersonaService, private ubicacionService:UbicacionService) {


    this.headerService.obtenerAcerca().subscribe((acercade) => {
      console.log(acercade);
      this.acercade=acercade;
    });

    this.personaService.obtenerPersona().subscribe((persona) => {
      console.log(persona);
      this.persona=persona;
    });

    this.personaService.obtenerUbicacion().subscribe((ubicacion) => {
      console.log(ubicacion);
      this.ubicacion=ubicacion;
    });

  }
  ngOnInit(): void {

    

   
  }
}
