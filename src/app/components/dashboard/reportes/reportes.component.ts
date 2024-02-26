import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { ReporteService } from 'src/app/services/reporte/reportes.service';
import { ReporteI } from '../../interfaces/Reporte';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})


export class ReportesComponent implements OnInit {
  dataSource!: MatTableDataSource<ReporteI | any>;
  displayedColumns: string[] = ['FECHA_HORA','ZONA','COLONIA','MOTIVO_DE_LA_DETENCION',
  'EDAD',
  'SEXO'
  ];
  empdata : any;


constructor(private reporteService: ReporteService){}

@ViewChild(MatPaginator) paginator: MatPaginator | any;
@ViewChild(MatSort) sort: MatSort | any;

ngOnInit(): void {
  this.obtenerLista();
}

obtenerLista() {
  this.reporteService.GetPdf().subscribe(res => {
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(res);
  });
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


}




