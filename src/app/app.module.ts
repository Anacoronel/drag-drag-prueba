import { UbicacionService } from './servicios/ubicacion.service';
import { AcercaService } from './servicios/acerca.service';
import { IdiomaService } from './servicios/idioma.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './componentes/app-header/app-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragAndDropManagerDirective } from './drag-and-drop-manager.directive';
import { EducExpComponent } from './componentes/educ-exp/educ-exp.component';
import { ProyectosSkillsComponent } from './componentes/proyectos-skills/proyectos-skills.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { AppRoutingModule } from './app-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { UiService } from './servicios/ui.service';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { HeaderService } from './servicios/header.service';
import { PersonaService } from './servicios/persona.service';
import { RegistroComponent } from './componentes/login/registro.component';
import { AuthService } from './servicios/auth.service';
import { TokenService } from './servicios/token.service';
import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DragAndDropManagerDirective,
    EducExpComponent,
    ProyectosSkillsComponent,
    SobremiComponent,
    LoginComponent,
    PortfolioComponent,
    RegistroComponent,



  ],
  imports: [
    // RouterModule.forRoot(routes,{enableTracing: true, onSameUrlNavigation: 'reload'}),
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule,

    FormsModule,
    ModalModule, ToastrModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      "radius": 34,
      "outerStrokeWidth": 9,
      "innerStrokeWidth": 9,
      "showBackground": false,
      "startFromZero": false,
      "showTitle": true,
      "space": -11.5,
      "showSubtitle": true,
      "subtitleFontSize": "12",
      "titleFontSize": "10",
      "lazy": false,
      "backgroundStroke": 'transparent',
      "backgroundGradientStopColor": 'transparent'


    })




  ],
  providers: [PortfolioService, UiService, PersonaService, HeaderService, IdiomaService, AcercaService, UbicacionService, BsModalService, TokenService, AuthService, BsModalRef, {
    provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

