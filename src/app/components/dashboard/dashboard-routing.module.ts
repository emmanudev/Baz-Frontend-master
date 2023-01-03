import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from 'angular-responsive-carousel';
import { AutomatizacionComponent } from './automatizacion/automatizacion.component';
import { BackgroundComponent } from './background/background.component';
import { DashboardComponent } from './dashboard.component';
import { DetenidosComponent } from './Detenido/detenidos.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { ReportesComponent } from './reportes/reportes.component';
import { DelitosComponent } from './Delito/delitos.component';
import { DatosDelitoComponent } from './Datos/datos-delito.component';
import { ObjetosComponent } from './Objetos/objetos.component';
import { OficalComponent } from './Oficial/ofical.component';
import { VehiculoComponent } from './Vehiculo/vehiculo.component';
import { VictimaComponent } from './Victima/victima.component';
import { GraficaComponent } from './grafica/grafica.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'inicio', component: BackgroundComponent },
      { path: 'expediente', component: ExpedienteComponent },
      { path: 'datos', component: DatosDelitoComponent },
      { path: 'oficial', component: OficalComponent },
      { path: 'detenido', component: DetenidosComponent },
      { path: 'delito', component: DelitosComponent },
      { path: 'vehiculo', component: VehiculoComponent },
      { path: 'Objetos', component: ObjetosComponent },
      { path: 'grafica', component: GraficaComponent },
      { path: 'reportes', component: ReportesComponent },
      { path: 'victima', component: VictimaComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
