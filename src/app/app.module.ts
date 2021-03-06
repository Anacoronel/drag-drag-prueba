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
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { RouterModule } from '@angular/router';
import { AddComponent } from './componentes/educ-exp/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DragAndDropManagerDirective,
    EducExpComponent,
    ProyectosSkillsComponent,
    SobremiComponent,
    AddComponent
  ],
  imports: [
    //RouterModule.forRoot(appRoutes, {enableTracing: true}
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatCardModule, MatCheckboxModule,
    MatButtonModule,MatButtonToggleModule,
    MatIconModule, MatListModule, MatProgressSpinnerModule

   
    
    
  ],
  providers: [PortfolioService//,{
   // provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true
 // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
