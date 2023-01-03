import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos Custom
import { SharedModule } from './components/shared/shared.module';
import { DashboardModule } from './components/dashboard/dashboard.module';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetenidosComponent } from './components/dashboard/Detenido/detenidos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    DashboardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
