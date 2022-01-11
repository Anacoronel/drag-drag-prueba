import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  

  
    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos()//.subscribe(data =>{console.log(data);
     //   this.miPortfolio=data[0];
   // });
    }
  

 
}
