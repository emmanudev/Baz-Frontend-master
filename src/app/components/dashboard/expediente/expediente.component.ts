import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExpedienteService } from 'src/app/services/expediente/expediente.service';
import { Expediente, ExpedienteI } from '../../interfaces/Expediente';


@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.css']
})

export class ExpedienteComponent implements OnInit {

  formExpediente: FormGroup;
  //formBuscarExp: FormGroup;
  panelOpenState1 = true;
  panelOpenState2 = false;
  panelOpenState3 = false;
  panelOpenState = false;
  imageSrc: string = '';
  spinner = false;
  dataSource!: MatTableDataSource<Expediente | any>;

  displayedColumns: string[] = ['id',
   'Numero_de_Folio',
   'Nombre_del_Primer_Respondiente',
   'Folio_Plataforma',
   'Folio_RND',
   'Turno',
   'Entrega_de_Remitidos',
   'Total_de_Remitidos',
   'action'];

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private expedienteService: ExpedienteService, public dialog: MatDialog) {
    this.formExpediente = this.fb.group({
      Numero_de_Folio: ['', Validators.required],
      Nombre_del_Primer_Respondiente: ['', Validators.required],
      Folio_Plataforma: ['', Validators.required],
      Folio_RND: ['', Validators.required],
      Turno: ['', Validators.required],
      Entrega_de_Remitidos: ['', Validators.required],
      Total_de_Remitidos: ['', Validators.required],
    });

  }


  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  ngOnInit(): void {
    this.obtenerLista();
  }

  obtenerLista() {
    this.expedienteService.getList().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res);
    });
  }

  guardar() {
    const expeData = this.formExpediente;
    console.log("Datos del la data");
    this.expedienteService.create(expeData).subscribe(res => {
      console.log("Respuesta de la creacion");
      console.log(res);
      this.mensaje("Creación exitosa");
    });
  }

  modificar(id : number) {
    console.log("Modificar : observable" );
    this.expedienteService.getItem(id).subscribe(res=>{
      const dialogRef = this.dialog.open(DialogContentExampleDialog, {
        data: res
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Cierre de dialogo');

      });
    });


  }


  onFileChange(event: any) {
    console.log("Evento File Change");
    console.log(event.files);
    const reader = new FileReader();


    const file = event;
    reader.readAsDataURL(file);

    reader.onload = () => {

      this.imageSrc = reader.result as string;

      console.log(this.imageSrc)
      this.formExpediente.patchValue({
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
export class DialogContentExampleDialog {
  formExpediente: FormGroup;

  constructor(private fb: FormBuilder, private expedienteService: ExpedienteService, public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Expediente) {
    this.formExpediente = this.fb.group({
      id: [data.id, Validators.required],
      Numero_de_Folio: [data.Numero_de_Folio, Validators.required],
      Nombre_del_Primer_Respondiente: [data.Nombre_del_Primer_Respondiente, Validators.required],
      Folio_Plataforma: [data.Folio_Plataforma, Validators.required],
      Folio_RND: [data.Folio_RND, Validators.required],
      Turno: [data.Turno, Validators.required],
      Entrega_de_Remitidos: [data.Entrega_de_Remitidos, Validators.required],
      Total_de_Remitidos: [data.Total_de_Remitidos, Validators.required],

    });
    console.log('MatDialog');
    console.log(data);

  }
  modificar() {
    const expeData = this.formExpediente;
    console.log("Datos del la data");
    console.log(expeData.value.id);
    this.expedienteService.update(expeData.value.id,expeData).subscribe(() => {
      console.log("Respuesta de la Modificación");
    });
  }

  eliminar(id : number) {
    this.expedienteService.delete(id).subscribe(()=> {

    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
