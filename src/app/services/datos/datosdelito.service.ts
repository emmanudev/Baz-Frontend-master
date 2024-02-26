import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { Datos, DatosI } from 'src/app/components/interfaces/Datos';

@Injectable({
  providedIn: 'root'
})
export class DatosdelitoService {

  constructor(private http: HttpClient) { }
  //Obtener datoss
  public getList(): Observable<DatosI[]> {
    return this.http.get<DatosI[]>(`http://127.0.0.1:8000/api/datos`).pipe(
      catchError(this.handleError)
    );
  }

  //Obtener datos por id
  public getItem(id: number): Observable<DatosI> {
    const response = this.http.get<DatosI>(`http://127.0.0.1:8000/api/datos/dato/${id}`).pipe(
      catchError(this.handleError)
    );
    return response;
  }

  //Creador de Expediente
  public create(datosData: FormGroup): Observable<DatosI> {
    const data = datosData.value;
    let datoData = new Datos(null, data.ZONA, data.COLONIA, data.CALLE_1, data.CALLE_O_REFERENCIA, data.MOTIVO_DE_LA_DETENCION, data.COORDENADA_Y_LATITUD, data.COORDENADA_X_LONGITUD);
    console.log(datoData);
    const response = this.http.post<DatosI>(`http://127.0.0.1:8000/api/datos/create`, datoData).pipe(
      catchError(this.handleError)
    );
    return response;
  }

  // Editar / Actualziar datos

  public update(id: number, datosData: FormGroup): Observable<any> {
    const data = datosData.value;
    let datoData = new Datos(null, data.ZONA, data.COLONIA, data.CALLE_1, data.CALLE_O_REFERENCIA, data.MOTIVO_DE_LA_DETENCION, data.COORDENADA_Y_LATITUD, data.COORDENADA_X_LONGITUD);
    const response = this.http.put<any>(`http://127.0.0.1:8000/api/datos/dato/${id}`, datoData).pipe(
      catchError(this.handleError)
    );
    return response;
  }

  // Eliminar datos

  public delete(id: any): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/datos/dato/${id}`).pipe(
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
