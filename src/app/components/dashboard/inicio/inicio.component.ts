import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { PerfQAService } from 'src/app/services/perfQA/perf-qa.service';
import { QAService } from 'src/app/services/QA/servicio-qa.service';
import { TablasQA } from '../../interfaces/tablasQA';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit  {
  formExtractos : FormGroup;
  formExtractosEnLinea : FormGroup;
  formExtractosCorreo : FormGroup;
  formExtractosPerf : FormGroup;
  formExtractosCorreoPerf : FormGroup;
  extractosRes : Observable<TablasQA> | any;

  constructor(private fb :FormBuilder, private qAService:QAService, private _snackBar: MatSnackBar, private servicePerfQa : PerfQAService) {
    this.formExtractos = this.fb.group({
      fecha: ['', Validators.required],
    });

    this.formExtractosEnLinea = this.fb.group({
      fecha: ['', Validators.required],
    });

    this.formExtractosCorreo = this.fb.group({
      fecha: ['', Validators.required],
    });
    
    this.formExtractosPerf = this.fb.group({
      fecha: ['', Validators.required],
    });

    this.formExtractosCorreoPerf = this.fb.group({
      fecha: ['', Validators.required],
    });

   }

  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;

  panePerflOpenState1 = false;
  panePerflOpenState2 = false;
  panePerflOpenState3 = false;

  loadingqa = false;
  message : any;   

  ngOnInit(): void {
    
  }

  ejecutarExtEnLinea(){
    const fecha = this.formExtractosEnLinea.value.fecha;
    this.loadingqa = true;
    console.log(fecha);
    this.qAService.getExtractosEnLifecha(fecha).subscribe(res => {
      this.extractosRes = res;
      if (res['status']) {
        console.log('Datos correctos');
        this._snackBar.open('Proceso terminado correctamente, Los extractos en Linea se generaron el en apartado de ftp','Cerrar', {
          duration: 10000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.loadingqa =false;
      } else {
        console.log('Datos incorrectos');
        this._snackBar.open('Proceso terminado, Fallo al generar extractos','Cerrar', {
          duration: 10000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.loadingqa =false;
      }
      console.log(res);

    });
  }

  ejecutarQA(){
    const fecha = this.formExtractos.value.fecha;
    this.loadingqa = true;
    console.log(fecha);
    this.qAService.getQAfecha(fecha).subscribe(res => {
      this.extractosRes = res;
      if (res['status']) {
        console.log('Datos correctos');
        this._snackBar.open('Proceso terminado correctamente, los archivos se generaron en servidor FTP','Cerrar', {
          duration: 10000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.loadingqa =false;
      } else {
        console.log('Datos incorrectos');
        this._snackBar.open('Proceso terminado, Fallo al generar extractos','Cerrar', {
          duration: 10000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.loadingqa =false;
      }
      console.log(res);
    });
  }

  ejecutarCorreoQA(){
    const fecha = this.formExtractosCorreo.value.fecha;
    this.loadingqa = true;
    console.log("Estamos en CorreoQA fecha :"+fecha);
    this.qAService.getCorreoFecha(fecha).subscribe(res => {
      this.extractosRes = res;
      if (res['status']) {
        console.log('Datos correctos');
        this._snackBar.open('Proceso terminado correctamente, se envio al core crédito y lista mandada anteriormente','Cerrar', {
          duration: 10000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.loadingqa =false;
      } else {
        console.log('Datos incorrectos');
        this._snackBar.open('Proceso terminado, Fallo al generar extractos','Cerrar', {
          duration: 10000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.loadingqa =false;
      }
      console.log(res);
    });
  }

  ejecutarPerfQA(){
    const fecha = this.formExtractosPerf.value.fecha;
    this.loadingqa = true;
    console.log(fecha);
    this.servicePerfQa.getPerfQAfecha(fecha).subscribe(res => {
      this.extractosRes = res;
      if (res['status']) {
        console.log('Datos correctos');
        this._snackBar.open('Proceso terminado, Correctamente','Cerrar', {
          duration: 10000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.loadingqa =false;
      } else {
        console.log('Datos incorrectos');
        this._snackBar.open('Proceso terminado, Fallo al generar extractos','Cerrar', {
          duration: 10000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.loadingqa =false;
      }
      console.log(res);
    });
  }

  ejecutarCorreoPerf(){
    const fecha = this.formExtractosCorreoPerf.value.fecha;
    this.loadingqa = true;
    console.log(fecha);
    this.servicePerfQa.getCorreoFecha(fecha).subscribe(res => {
      this.extractosRes = res;
      if (res['status']) {
        console.log('Datos correctos');
        this._snackBar.open('Proceso terminado, Correctamente','Cerrar', {
          duration: 10000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.loadingqa =false;
      } else {
        console.log('Datos incorrectos');
        this._snackBar.open('Proceso terminado, Fallo al generar extractos','Cerrar', {
          duration: 10000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.loadingqa =false;
      }
      console.log(res);
    });
  }
}