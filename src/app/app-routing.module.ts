import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

/*import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { GuardGuard } from './servicios/guard.guard';
 */

const routes: Routes = [
 // {path:'portfolio', component: PortfolioComponent, canActivatpathe:[GuardGuard]},
 // {path:'iniciar-sesion', component: InicioSesionComponent},
 // {path:'', redirectTo:'iniciar-sesion',pathMatch:'full'}
 // {path: 'add-edu', component: AddEduComponent},

    {path:'',pathMatch:'full', component:PortfolioComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
