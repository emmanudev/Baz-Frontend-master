import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundComponent } from './background/background.component';
import { DialogContentExampleDialog, ExpedienteComponent } from './expediente/expediente.component';
import { DialogContentExampleDialog2, DatosComponent } from './datos/datos.component';
import { DialogContentExampleDialog3, OficialComponent } from './oficial/oficial.component';
import { DialogContentExampleDialog4, DelitoComponent } from './delito/delito.component';
import { DialogContentExampleDialog5, DetenidoComponent } from './detenido/detenido.component';
import { VictimaComponent } from './victima/victima.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { GraficaComponent } from './grafica/grafica.component';
import { ReportesComponent } from './reportes/reportes.component';

@NgModule({
  declarations: [
    NavbarComponent,
    BackgroundComponent,
    ExpedienteComponent,
    DatosComponent,
    OficialComponent,
    DelitoComponent,
    DetenidoComponent,
    VictimaComponent,
    VehiculoComponent,
    ObjetosComponent,
    GraficaComponent,
    ReportesComponent,
    DialogContentExampleDialog,
    DialogContentExampleDialog2,
    DialogContentExampleDialog3,
    DialogContentExampleDialog4,
    DialogContentExampleDialog5,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  exports : [
    NavbarComponent,
    BackgroundComponent,
    ExpedienteComponent,
    DatosComponent,
    OficialComponent,
    DelitoComponent,
    DetenidoComponent,
    VictimaComponent,
    VehiculoComponent,
    ObjetosComponent,
    GraficaComponent,
    ReportesComponent,
    DialogContentExampleDialog,
    DialogContentExampleDialog2,
    DialogContentExampleDialog3,
    DialogContentExampleDialog4,
    DialogContentExampleDialog5,
  ]
})
export class DashboardModule { }
