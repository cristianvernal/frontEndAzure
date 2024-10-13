import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './authentication/home/home.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { WebapiComponent } from './authentication/webapi/webapi.component';
import { UsuarioComponent } from './business/usuario/usuario.component';
import { DashboardComponent } from './business/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'webapi',
    component: WebapiComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    canActivate: [MsalGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledNonBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }