import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { LandingRepartidoresComponent } from './component/landing-repartidores/landing-repartidores.component';

//Router
import { AppRoutingModule } from './app-routing.module';
import { SinginComponent } from './component/singin/singin.component';

import { HttpClientModule } from '@angular/common/http';
import { OrdenesComponent } from './component/ordenes/ordenes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingRepartidoresComponent,
    SinginComponent,
    OrdenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
