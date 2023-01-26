import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { Expediente } from 'src/app/components/interfaces/Expediente';

@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {
  apiUrl = `http://localhost:8080/expediente`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient) { }

  //Obtener expedientes
  public getList(): Observable<Expediente|any> {
    return this.http.get(`${this.apiUrl}/list`).pipe(
      catchError(this.handleError)
    );
  }

  //Obtener expediente por id
  public getItem(id: any): Observable<any> {
    const response = this.http.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
    console.log(response);
    return response;
  }

  //Creador de Expediente
  public create(expedienteData : FormGroup) : Observable<Expediente | any>{
    const data = expedienteData.value
    console.log("Contenido");
    let dataExp = new Expediente(null,data.fuente,data.nic,data.nuc,data.no_folio,data.referencia,data.folio,data.fechacap.toString(),data.file);
    console.log(dataExp);
    const response = this.http.post(`http://localhost:8080/expediente/add`, dataExp).pipe(
      catchError(this.handleError)
    );
    //console.log(response);
    return response;
  }

  // Editar / Actualziar Expediente

  public update(id: any, expedienteData: FormGroup): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, expedienteData).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar Expediente

  public delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
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
