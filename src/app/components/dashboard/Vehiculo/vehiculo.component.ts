import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VehiculoService } from 'src/app/services/vehiculo/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  panelOpenState: boolean = false;
  formExpediente: FormGroup | any;
  loading: boolean = false;

  constructor(private vehiculoService : VehiculoService) { }

  ngOnInit(): void {
  }

}
