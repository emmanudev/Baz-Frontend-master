import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { Expediente, ExpedienteI } from 'src/app/components/interfaces/Expediente';

@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {


  constructor(private http:HttpClient) { }

  //Obtener expedientes
  public getList(): Observable<ExpedienteI[]> {
    return this.http.get<ExpedienteI[]>(`http://127.0.0.1:8000/api/expedientes`).pipe(
      catchError(this.handleError)
    );
    //return this.http.get<Expediente[]>('./assets/data/expediente.json');
  }

  //Obtener expediente por id
  public getItem(id: number): Observable<ExpedienteI> {
    const response = this.http.get<ExpedienteI>(`http://127.0.0.1:8000/api/expedientes/expediente/${id}`).pipe(
      catchError(this.handleError)
    );
    return response;
  }

  //Creador de Expediente
  public create(expedienteData : FormGroup) : Observable<ExpedienteI>{
    const data = expedienteData.value;
    let dataExp = new Expediente(null,data.Numero_de_Folio,data.Nombre_del_Primer_Respondiente,data.Folio_Plataforma,data.Folio_RND,data.Turno,data.Entrega_de_Remitidos,data.Total_de_Remitidos);
    console.log(dataExp);
    const response = this.http.post<ExpedienteI>(`http://127.0.0.1:8000/api/expedientes/guardar`, dataExp).pipe(
      catchError(this.handleError)
    );
    return response;
  }

  // Editar / Actualziar Expediente

  public update(id: number, expedienteData: FormGroup): Observable<any> {
    const data = expedienteData.value;
    let dataExp = new Expediente(data.id, data.Numero_de_Folio,data.Nombre_del_Primer_Respondiente,data.Folio_Plataforma,data.Folio_RND,data.Turno,data.Entrega_de_Remitidos,data.Total_de_Remitidos);
    const response = this.http.put<any>(`http://127.0.0.1:8000/api/expedientes/expediente/${id}`, dataExp).pipe(
      catchError(this.handleError)
    );
    return response;
  }

  // Eliminar Expediente

  public delete(id: any): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/expedientes/expediente/${id}`).pipe(
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
