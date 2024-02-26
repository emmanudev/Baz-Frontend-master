import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatosdelitoService } from 'src/app/services/datos/datosdelito.service';

@Component({
  selector: 'app-datos-delito',
  templateUrl: './datos-delito.component.html',
  styleUrls: ['./datos-delito.component.css']
})

export class DatosDelitoComponent implements OnInit {
  panelOpenState: boolean = false;
  formDatos: FormGroup | any;
  loading: boolean = false;

  loadingqa: boolean = false;

  constructor(private datosdelitoService: DatosdelitoService, private fb: FormBuilder, private _snackBar: MatSnackBar) {
  this.formDatos = this.fb.group({
    Id_datos: ['', Validators.required],
    Colonia: ['', Validators.required],
    Zona: ['', Validators.required],
    Region: ['', Validators.required],
    Calle1: ['', Validators.required],
    Calle2: ['', Validators.required],
    Numero: ['', Validators.required],
    Adscripcion: ['', Validators.required],
    Impacto: ['', Validators.required],
    Y: ['', Validators.required],
    X: ['', Validators.required],

  });
  }


ngOnInit(): void {

}

createDatos() {
  const datedata = this.formDatos;
  console.log("Datos del la data");
  console.log(datedata);
  this.datosdelitoService.create(datedata).subscribe(res => {

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



