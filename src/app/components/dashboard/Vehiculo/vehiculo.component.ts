import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TablasQA } from '../../interfaces/tablasQA';
@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  formVehiculo : FormGroup;
  panelOpenState1 = true;
  panelOpenState2 = false;
  panelOpenState3 = false;
  panelOpenState4 = false;
  panelOpenState = false;
  imageSrc: string = '';
  spinner = false;

  dataSource!: MatTableDataSource<TablasQA | any>;
  displayedColumns: string[] = ['id_log', 'timestamp', 'status', 'environment', 'created_at'];

  loadingqa:any = false;

  constructor(private fb :FormBuilder, private _snackBar: MatSnackBar) {
    this.formVehiculo = this.fb.group({
      fecha: ['', Validators.required],
    });
  }


  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  ngOnInit(): void {
    /*this.logsService.getLogs().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res);
    });*/
  }

  guardar(){

  }

  modificar(){

  }

  eliminar(){

  }

  obtener(){

  }

  private mensaje(msg :string){
    this._snackBar.open(msg,'Cerrar', {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  private mensajeError(){
    this._snackBar.open('Error ,verificar con administrador','Cerrar', {
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
