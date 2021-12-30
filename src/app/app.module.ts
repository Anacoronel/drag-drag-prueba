import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './componentes/app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
