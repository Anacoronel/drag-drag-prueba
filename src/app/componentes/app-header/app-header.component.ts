import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent implements OnInit {
  miPortfolio: any;
  constructor(private portfolioService: PortfolioService) {}
  ngOnInit(): void {
    this.portfolioService.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.miPortfolio = data[0];
    });
  }
}
