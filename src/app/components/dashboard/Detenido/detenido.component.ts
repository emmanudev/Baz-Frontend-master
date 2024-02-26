import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DetenidosService } from 'src/app/services/detenido/detenido.service';
import { DetenidosI } from '../../interfaces/Detenidos';

@Component({
  selector: 'app-detenido',
  templateUrl: './detenido.component.html',
  styleUrls: ['./detenido.component.css']
})
export class DetenidoComponent implements OnInit {

  formDetenidos: FormGroup;
  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;
  panelOpenState = false;
  imageSrc: string = '';
  spinner = false;
  dataSource!: MatTableDataSource<DetenidosI>;

  displayedColumns: string[] = ['id_REMITIDOS',
    'NOMBRE',
    'APELLIDO_PATERNO',
    'APELLIDO_MATERNO',
    'EDAD',
    'ORIGINARIO',
    'FECHA_NACIMIENTO',
    'NOMBRE_DEL_PADRE',
    'NOMBRE_DE_LA_MADRE',
    'DOMICILIO',
    'IMAGEN',
    'SEXO',
    'action',
     ];
  fileName: any;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private detenidosService: DetenidosService, public dialog: MatDialog) {
    this.formDetenidos = this.fb.group({
      NOMBRE: ['', Validators.required],
      APELLIDO_PATERNO: ['', Validators.required],
      APELLIDO_MATERNO: ['', Validators.required],
      EDAD: ['', Validators.required],
      ORIGINARIO: ['', Validators.required],
      FECHA_NACIMIENTO: ['', Validators.required],
      NOMBRE_DEL_PADRE: ['', Validators.required],
      NOMBRE_DE_LA_MADRE: ['', Validators.required],
      DOMICILIO: ['', Validators.required],
      IMAGEN: ['', Validators.required],
      SEXO: ['', Validators.required],

    });

  }


  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  ngOnInit(): void {
    this.obtenerLista();
  }

  obtenerLista() {
    this.detenidosService.getList().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res);
    });
  }

  guardar() {
    const datoData = this.formDetenidos;
    console.log("Datos del la data");
    this.detenidosService.create(datoData).subscribe(res => {
      console.log("Respuesta de la creacion");
      console.log(res);
      this.mensaje("Creación exitosa");
    });
  }

  modificar(id : number) {
    console.log("Modificar : observable" );
    this.detenidosService.getItem(id).subscribe(res=>{
      const dialogRef = this.dialog.open(DialogContentExampleDialog5, {
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
      this.formDetenidos.patchValue({
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
export class DialogContentExampleDialog5 {
  formDetenidos: FormGroup;

  constructor(private fb: FormBuilder, private detenidosService : DetenidosService, public dialogRef: MatDialogRef<DialogContentExampleDialog5>,
    @Inject(MAT_DIALOG_DATA) public data: DetenidosI) {
    this.formDetenidos = this.fb.group({
        id_REMITIDOS : [data.id_REMITIDOS, Validators.required],
        NOMBRE: [data.NOMBRE, Validators.required],
        APELLIDO_PATERNO: [data.APELLIDO_PATERNO, Validators.required],
        APELLIDO_MATERNO: [data.APELLIDO_MATERNO, Validators.required],
        EDAD: [data.EDAD, Validators.required],
        ORIGINARIO: [data.ORIGINARIO, Validators.required],
        FECHA_NACIMIENTO: [data.FECHA_NACIMIENTO, Validators.required],
        NOMBRE_DEL_PADRE: [data.NOMBRE_DEL_PADRE, Validators.required],
        NOMBRE_DE_LA_MADRE: [data.NOMBRE_DE_LA_MADRE, Validators.required],
        DOMICILIO: [data.DOMICILIO, Validators.required],
        IMAGEN: [data.IMAGEN, Validators.required],
        SEXO : [data.SEXO, Validators.required],

    });
    console.log('MatDialog');
    console.log(data);
  }

  modificar() {
    const datoDeli= this.formDetenidos;
    console.log("Datos del la data");
    console.log(datoDeli.value.id_REMITIDOS);
    this.detenidosService.update(datoDeli.value.id_REMITIDOS,datoDeli).subscribe(() => {
      console.log("Respuesta de la Modificación");
    });
  }

  eliminar(id : number) {
    this.detenidosService.delete(id).subscribe(()=> {

    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
