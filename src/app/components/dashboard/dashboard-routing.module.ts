import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { DashboardComponent } from './dashboard.component';
import { DatosComponent } from './datos/datos.component';
import { DelitoComponent } from './delito/delito.component';
import { DetenidoComponent } from './detenido/detenido.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { GraficaComponent } from './grafica/grafica.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { OficialComponent } from './oficial/oficial.component';
import { ReportesComponent } from './reportes/reportes.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { VictimaComponent } from './victima/victima.component';

const routes: Routes = [
  { path: '' , component: DashboardComponent, children :[
    { path: '' , component: BackgroundComponent},
    { path: 'expediente' , component: ExpedienteComponent},
    { path: 'datos' , component: DatosComponent},
    { path: 'oficial' , component: OficialComponent},
    { path: 'delito' , component: DelitoComponent},
    { path: 'detenido' , component: DetenidoComponent},
    { path: 'victima' , component: VictimaComponent},
    { path: 'vehiculo' , component: VehiculoComponent},
    { path: 'objetos' , component: ObjetosComponent},
    { path: 'grafica' , component: GraficaComponent},
    { path: 'reportes' , component: ReportesComponent},

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
