import { UbicacionService } from './servicios/ubicacion.service';
import { AcercaService } from './servicios/acerca.service';
import { IdiomaService } from './servicios/idioma.service';
import { MatTableModule } from '@angular/material/table';
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
import { NgCircleProgressModule } from 'ng-circle-progress';



import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';




import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { RouterModule } from '@angular/router';
import { AddComponent } from './componentes/educ-exp/add/add.component';
import { AddEduComponent } from './componentes/educ-exp/add-edu/add-edu.component';
import { UiService } from './servicios/ui.service';
import { AddProyComponent } from './componentes/proyectos-skills/add-proy/add-proy.component';
import { AddskillComponent } from './componentes/proyectos-skills/addskill/addskill.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { FormEduComponent } from './componentes/educ-exp/form-edu/form-edu.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HeaderService } from './servicios/header.service';
import { PersonaService } from './servicios/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DragAndDropManagerDirective,
    EducExpComponent,
    ProyectosSkillsComponent,
    SobremiComponent,
    AddComponent,
    AddEduComponent,
    AddProyComponent,
    AddskillComponent,
    LoginComponent,
    PortfolioComponent,
    FormEduComponent,
    EducacionComponent
    

  ],
  imports: [
   // RouterModule.forRoot(appRoutes, {enableTracing: true}
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatCardModule, MatCheckboxModule,
    MatButtonModule,MatButtonToggleModule,
    MatIconModule, MatListModule, MatProgressSpinnerModule,
    FormsModule,CdkTableModule, MatTableModule,
    MatDialogModule, MatFormFieldModule, ModalModule,
    MatInputModule, NgCircleProgressModule.forRoot({
      // set defaults here
      "radius": 10,
      "outerStrokeWidth": 10,
      "innerStrokeWidth": 5,
      "showBackground": false,
      "startFromZero": false, 
      "showTitle":true,
      "showSubtitle":true,
      "lazy":false,
      "backgroundStroke": 'transparent',
      "backgroundGradientStopColor":'transparent'
      
      
      })
 
   
    
    
  ],
  providers: [PortfolioService, UiService, PersonaService, HeaderService, IdiomaService, AcercaService, UbicacionService, BsModalService, BsModalRef//{
   // provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true
 // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

