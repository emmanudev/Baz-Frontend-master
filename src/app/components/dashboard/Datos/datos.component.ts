import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatosdelitoService } from 'src/app/services/datos/datosdelito.service';
import { Datos } from '../../interfaces/Datos';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})

export class  DatosComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  formDatos: FormGroup;
  //formBuscarExp: FormGroup;
  panelOpenState1 = true;
  panelOpenState2 = false;
  panelOpenState3 = false;
  panelOpenState = false;
  imageSrc: string = '';
  spinner = false;
  dataSource!: MatTableDataSource<Datos | any>;

  displayedColumns: string[] = ['id_DATOS',
  'ZONA',
  'FECHA_HORA',
  'COLONIA',
  'CALLE_1',
  'CALLE_O_REFERENCIA',
  'MOTIVO_DE_LA_DETENCION',
  'COORDENADA_Y_LATITUD',
  'COORDENADA_X_LONGITUD',
  'action'];

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private datosDelitoService: DatosdelitoService, public dialog: MatDialog) {
    this.formDatos = this.fb.group({
      ZONA: ['', Validators.required],
      COLONIA: ['', Validators.required],
      CALLE_1: ['', Validators.required],
      CALLE_O_REFERENCIA: ['', Validators.required],
      MOTIVO_DE_LA_DETENCION: ['', Validators.required],
      COORDENADA_Y_LATITUD: ['', Validators.required],
      COORDENADA_X_LONGITUD: ['', Validators.required],

    });

  }


  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  ngOnInit(): void {
    this.obtenerLista();
  }

  obtenerLista() {
    this.datosDelitoService.getList().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res);
    });
  }

  guardar() {
    const datoData = this.formDatos;
    console.log("Datos del la data");
    this.datosDelitoService.create(datoData).subscribe(res => {
      console.log("Respuesta de la creacion");
      console.log(res);
      this.mensaje("Creación exitosa");
    });
  }

  modificar(id : number) {
    console.log("Modificar : observable" );
    this.datosDelitoService.getItem(id).subscribe(res=>{
      const dialogRef = this.dialog.open(DialogContentExampleDialog2, {
        data: res
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Cierre de dialogo');

      });
    });


  }


  onFileChange(event: any) {
    console.log("Evento File Change");
    console.log(event);
    const reader = new FileReader();


    const file = event;
    reader.readAsDataURL(file);

    reader.onload = () => {

      this.imageSrc = reader.result as string;

      console.log(this.imageSrc)
      this.formDatos.patchValue({
        fotoSource: reader.result
      });
    };
  }

  mensaje(msg: string) {
    this._snackBar.open(msg, 'Cerrar', {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  mensajeError() {
    this._snackBar.open('Error ,verificar con administrador', 'Cerrar', {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog2 {
  formDatos: FormGroup;

  constructor(private fb: FormBuilder, private datosDelitoService : DatosdelitoService, public dialogRef: MatDialogRef<DialogContentExampleDialog2>,
    @Inject(MAT_DIALOG_DATA) public data: Datos) {
    this.formDatos = this.fb.group({
      id_DATOS: [data.id_DATOS, Validators.required],
      ZONA: [data.ZONA, Validators.required],
      COLONIA: [data.COLONIA, Validators.required],
      CALLE_1: [data.CALLE_1, Validators.required],
      CALLE_O_REFERENCIA: [data.CALLE_O_REFERENCIA, Validators.required],
      MOTIVO_DE_LA_DETENCION: [data.MOTIVO_DE_LA_DETENCION, Validators.required],
      COORDENADA_Y_LATITUD: [data.COORDENADA_Y_LATITUD, Validators.required],
      COORDENADA_X_LONGITUD: [data.COORDENADA_X_LONGITUD, Validators.required],

    });
    console.log('MatDialog');
    console.log(data);

  }
  modificar() {
    const datoData = this.formDatos;
    console.log("Datos del la data");
    console.log(datoData.value.id_DATOS);
    this.datosDelitoService.update(datoData.value.id_DATOS,datoData).subscribe(() => {
      console.log("Respuesta de la Modificación");
    });
  }

  eliminar(id : number) {
    this.datosDelitoService.delete(id).subscribe(()=> {

    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
