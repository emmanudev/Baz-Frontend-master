import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DelitoService } from 'src/app/services/delito/delito.service';
import { Delito, DelitoI } from '../../interfaces/Delito';

@Component({
  selector: 'app-delito',
  templateUrl: './delito.component.html',
  styleUrls: ['./delito.component.css']
})
export class DelitoComponent implements OnInit {

  formDelito: FormGroup;
  //formBuscarExp: FormGroup;
  panelOpenState1 = true;
  panelOpenState2 = false;
  panelOpenState3 = false;
  panelOpenState = false;
  imageSrc: string = '';
  spinner = false;
  dataSource!: MatTableDataSource<DelitoI | any>;

  displayedColumns: string[] = ['Id_delito', 'Tipo_Delito', 'Subtipo', 'Modalidad', 'fecha', 'action'];

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private delitoService: DelitoService, public dialog: MatDialog) {
    this.formDelito = this.fb.group({
      Tipo_Delito:  ['', Validators.required],
      Subtipo:  ['', Validators.required],
      Modalidad:  ['', Validators.required],
    });

  }


  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  ngOnInit(): void {
    this.obtenerLista();
  }

  obtenerLista() {
    this.delitoService.getList().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res);
    });
  }

  guardar() {
    const datoData = this.formDelito;
    console.log("Datos del la data");
    this.delitoService.create(datoData).subscribe(res => {
      console.log("Respuesta de la creacion");
      console.log(res);
      this.mensaje("Creación exitosa");
    });
  }

  modificar(id : number) {
    console.log("Modificar : observable" );
    this.delitoService.getItem(id).subscribe(res=>{
      const dialogRef = this.dialog.open(DialogContentExampleDialog4, {
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
      this.formDelito.patchValue({
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
export class DialogContentExampleDialog4 {
  formDelito: FormGroup;

  constructor(private fb: FormBuilder, private delitoService : DelitoService, public dialogRef: MatDialogRef<DialogContentExampleDialog4>,
    @Inject(MAT_DIALOG_DATA) public data: Delito) {

      this.formDelito = this.fb.group({
        Id_delito:  [data.Id_delito, Validators.required],
        Tipo_Delito:  [data.Tipo_Delito, Validators.required],
        Subtipo:  [data.Modalidad, Validators.required],
        Modalidad:  [data.Modalidad, Validators.required],
      });
    console.log('MatDialog');
    console.log(data);
  }

  modificar() {
    const datoDeli= this.formDelito;
    console.log("Datos del la data");
    console.log(datoDeli.value.Id_delito);
    this.delitoService.update(datoDeli.value.Id_delito,datoDeli).subscribe(() => {
      console.log("Respuesta de la Modificación");
    });
  }

  eliminar(id : number) {
    this.delitoService.delete(id).subscribe(()=> {

    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
