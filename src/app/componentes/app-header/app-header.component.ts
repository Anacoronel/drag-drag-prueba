import { HeaderService } from './../../servicios/header.service';
import { Component, OnInit } from '@angular/core';
import { Acercade } from '../../models/Acercade';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Router } from '@angular/router';
import{TokenService} from '../../servicios/token.service'

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
    isLogged=false;


  

  constructor(private headerService: HeaderService, private personaService:PersonaService, private router: Router, private tokenService: TokenService) 
  {


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
    if (this.tokenService.getToken()){
      this.isLogged=true;
    }
    

   
  }
  signout():void{
    this.tokenService.logOut();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; 
    this.router.navigate([this.router.url]);

  }
  
  
}
