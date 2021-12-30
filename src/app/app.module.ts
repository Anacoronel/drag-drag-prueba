import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './componentes/app-header/app-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragAndDropManagerDirective } from './drag-and-drop-manager.directive';
import { EducExpComponent } from './componentes/educ-exp/educ-exp.component';
import { ProyectosSkillsComponent } from './componentes/proyectos-skills/proyectos-skills.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DragAndDropManagerDirective,
    EducExpComponent,
    ProyectosSkillsComponent,
    SobremiComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
