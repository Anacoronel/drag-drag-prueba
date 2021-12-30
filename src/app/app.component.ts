import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drag';
  card=[]

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.card, event.previousIndex, event.currentIndex);
  }

}
