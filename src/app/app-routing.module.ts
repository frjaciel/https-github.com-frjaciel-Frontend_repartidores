import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LandingRepartidoresComponent } from './component/landing-repartidores/landing-repartidores.component';
import { LoginComponent } from './component/login/login.component';
import { SinginComponent } from './component/singin/singin.component';
import { OrdenesComponent } from "./component/ordenes/ordenes.component";

const routes: Routes = [
    {path: 'LandingRepartidores', component: LandingRepartidoresComponent },
    {path: 'Login', component: LoginComponent},
    {path: 'LandingRepartidores/Singin', component: SinginComponent},
    {path: 'Ordenes', component: OrdenesComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'LandingRepartidores' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }