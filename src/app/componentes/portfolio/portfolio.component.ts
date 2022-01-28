import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  

appComponent=[
  'app-app-header',
  'app-sobremi',
  'app-proyectos-skills',
  'app-educ-exp',
]


dropped(event: CdkDragDrop<string[]>) {
  moveItemInArray(
     this.appComponent,
     event.previousIndex,
     event.currentIndex
    );
  }
  


  constructor() { }

  ngOnInit(): void {
  }

}
