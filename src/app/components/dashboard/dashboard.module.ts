import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { LogsComponent } from './logs/logs.component';
import { AutomatizacionComponent } from './automatizacion/automatizacion.component';
import { BackgroundComponent } from './background/background.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { DatosDelitoComponent } from './Datos/datos-delito.component';
import { DelitosComponent } from './Delito/delitos.component';
import { DetenidosComponent } from './Detenido/detenidos.component';

import { VehiculoComponent } from './Vehiculo/vehiculo.component';
import { ObjetosComponent } from './Objetos/objetos.component';
import { OficalComponent } from './Oficial/ofical.component';
import { VictimaComponent } from './Victima/victima.component';
import { GraficaComponent } from './grafica/grafica.component';
import { ReportesComponent } from './reportes/reportes.component';


@NgModule({
  declarations: [
    NavbarComponent,
    InicioComponent,
    LogsComponent,
    AutomatizacionComponent,
    BackgroundComponent,
    ExpedienteComponent,
    DatosDelitoComponent,
    DelitosComponent,
    DetenidosComponent,
    VehiculoComponent,
    ObjetosComponent,
    OficalComponent,
    VictimaComponent,
    GraficaComponent,
    ReportesComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  exports : [
    NavbarComponent,
    InicioComponent,
    LogsComponent,
    AutomatizacionComponent,
    BackgroundComponent,

  ]
})
export class DashboardModule { }
