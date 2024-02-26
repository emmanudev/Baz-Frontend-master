import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { Oficial, OficialI } from 'src/app/components/interfaces/Oficial';

@Injectable({
  providedIn: 'root'
})
export class OficialService {

  constructor(private http:HttpClient) { }

  //Obtener oficial
  public getList(): Observable<OficialI[]> {
    return this.http.get<OficialI[]>(`http://127.0.0.1:8000/api/oficial`).pipe(
      catchError(this.handleError)
    );
    //return this.http.get<datos[]>('./assets/data/datos.json');
  }

  //Obtener datos por id
  public getItem(id: number): Observable<OficialI> {
    const response = this.http.get<OficialI>(`http://127.0.0.1:8000/api/oficial/oficial/${id}`).pipe(
      catchError(this.handleError)
    );
    return response;
  }

  //Creador de Expediente
  public create(oficialData: FormGroup): Observable<OficialI> {
    const data = oficialData.value;

    let datoOficial = new Oficial(data.OFICIAL,data.NOMBRE_OFICIAL,data.DEPENDENCIA, data.INSTITUCION, data.DETENIDO, data.HECHOS);
    console.log(datoOficial);
    const response = this.http.post<OficialI>(`http://127.0.0.1:8000/api/oficial/create`, datoOficial).pipe(
      catchError(this.handleError)
    );
    return response;
  }

  // Editar / Actualziar datos

  public update(id: number, oficialData: FormGroup): Observable<any> {
    const data = oficialData.value;
    let oficialDatos = new Oficial(data.OFICIAL,data.NOMBRE_OFICIAL,data.DEPENDENCIA, data.INSTITUCION, data.DETENIDO, data.HECHOS);
    console.log("Datos de Oficial : ", oficialDatos);
    const response = this.http.put<any>(`http://127.0.0.1:8000/api/oficial/oficial/${id}`, oficialDatos).pipe(
      catchError(this.handleError)
    );
    return response;
  }

  // Eliminar datos

  public delete(id: any): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/oficial/oficial/${id}`).pipe(
      catchError(this.handleError)
    );
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
