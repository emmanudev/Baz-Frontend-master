import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpedienteService } from 'src/app/services/expediente/expediente.service';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.css']
})
export class ExpedienteComponent implements OnInit {

  formExpediente: FormGroup | any;
  panelOpenState = true;
  panelOpenState2 = false;

  loadingqa: boolean = false;

  constructor(private expedienteService: ExpedienteService, private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.formExpediente = this.fb.group({
      fuente: ['', Validators.required],
      nic: ['', Validators.required],
      nuc: ['', Validators.required],
      no_folio: ['', Validators.required],
      referencia: ['', Validators.required],
      folio: ['', Validators.required],
      fechacap: ['', Validators.required],
      file: ['', Validators.required]
    });
  }


  ngOnInit(): void {

  }

  createExp() {
    const expeData = this.formExpediente;
    console.log("Datos del la data");
    console.log(expeData);
    this.expedienteService.create(expeData).subscribe(res => {
      console.log();
    });
  }

  private error() {
    this._snackBar.open('¡Error en servicio!', 'Cerrar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  private mensaje(mensaje: string) {
    this._snackBar.open(mensaje, 'Cerrar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
