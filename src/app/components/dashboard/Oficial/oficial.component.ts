import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OficialService } from 'src/app/services/oficial/oficial.service';
import { OficialI } from '../../interfaces/Oficial';

@Component({
  selector: 'app-oficial',
  templateUrl: './oficial.component.html',
  styleUrls: ['./oficial.component.css']
})
export class OficialComponent implements OnInit {

  formOficial: FormGroup;
  //formBuscarExp: FormGroup;
  panelOpenState1 = true;
  panelOpenState2 = false;
  imageSrc: string = '';
  spinner = false;
  dataSource!: MatTableDataSource<OficialI | any>;

  displayedColumns: string[] = ['OFICIAL',
    'NOMBRE_OFICIAL',
    'DEPENDENCIA',
    'INSTITUCION',
    'DETENIDO',
    'HECHOS',
    'action'
    ];

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private oficialService: OficialService, public dialog: MatDialog) {
    this.formOficial = this.fb.group({
      NOMBRE_OFICIAL: ['', Validators.required],
      DEPENDENCIA: ['', Validators.required],
      INSTITUCION: ['', Validators.required],
      DETENIDO: ['', Validators.required],
      HECHOS: ['', Validators.required],

    });

  }


  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  ngOnInit(): void {
    this.obtenerLista();
  }

  obtenerLista() {
    this.oficialService.getList().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res);
    });
  }

  guardar() {
    const oficialData = this.formOficial;
    console.log("Datos del la Oficial");
    this.oficialService.create(oficialData).subscribe(res => {
      console.log("Respuesta de la creacion");
      console.log(res);
      this.mensaje("Creación exitosa");
    });
  }

  modificar(id : number) {
    console.log("Modificar : observable" );
    this.oficialService.getItem(id).subscribe(res=>{
      const dialogRef = this.dialog.open(DialogContentExampleDialog3 ,{
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
      this.formOficial.patchValue({
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
export class DialogContentExampleDialog3 {
  formOficial: FormGroup;

  constructor(private fb: FormBuilder, private oficialService : OficialService, public dialogRef: MatDialogRef<DialogContentExampleDialog3>,
    @Inject(MAT_DIALOG_DATA) public data: OficialI) {
    this.formOficial = this.fb.group({
      OFICIAL: [data.OFICIAL, Validators.required],
      NOMBRE_OFICIAL: [data.NOMBRE_OFICIAL, Validators.required],
      DEPENDENCIA: [data.DEPENDENCIA, Validators.required],
      INSTITUCION: [data.INSTITUCION, Validators.required],
      DETENIDO: [data.DETENIDO, Validators.required],
      HECHOS: [data.HECHOS, Validators.required],
    });
    console.log('MatDialog');
    console.log(data);

  }
  modificar() {
    const oficialData = this.formOficial;
    console.log("Datos del la data");
    console.log(oficialData.value.OFICIAL);
    this.oficialService.update(oficialData.value.OFICIAL,oficialData).subscribe(() => {
      console.log("Respuesta de la Modificación");
    });
  }

  eliminar(id : number) {
    this.oficialService.delete(id).subscribe(()=> {

    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
function applyFilter(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit | undefined): Event; prototype: Event; readonly AT_TARGET: number; readonly BUBBLING_PHASE: number; readonly CAPTURING_PHASE: number; readonly NONE: number; }) {
  throw new Error('Function not implemented.');
}

