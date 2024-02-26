import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ReporteI } from 'src/app/components/interfaces/Reporte';


@Injectable({
  providedIn: 'root'
})
export class ReporteService {



  constructor(private http:HttpClient) { }

  GetPdf():Observable<ReporteI[]>{
  return this.http.get<ReporteI[]>("http://127.0.0.1:8000/api/reportes");
}



// Manejador de errores API
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
}

}

