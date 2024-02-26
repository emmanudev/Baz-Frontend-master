import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { Detenidos, DetenidosI } from 'src/app/components/interfaces/Detenidos';

@Injectable({
  providedIn: 'root'
})
export class DetenidosService {


  constructor(private http:HttpClient) { }

  //Obtener expedientes
  public getList(): Observable<DetenidosI[]> {
    return this.http.get<DetenidosI[]>(`http://127.0.0.1:8000/api/remitidos`).pipe(
      catchError(this.handleError)
    );
    //return this.http.get<Expediente[]>('./assets/data/expediente.json');
  }

  //Obtener expediente por id
  public getItem(id: number): Observable<DetenidosI> {
    const response = this.http.get<DetenidosI>(`http://127.0.0.1:8000/api/remitidos/remitido/${id}`).pipe(
      catchError(this.handleError)
    );
    return response;
  }

  //Creador de Detenido
  public create(detenidosData : FormGroup) : Observable<DetenidosI>{
    const data = detenidosData.value;
    let detenidoData = new Detenidos(data.id_REMITIDOS,data.NOMBRE,data.APELLIDO_PATERNO,data.APELLIDO_MATERNO,data.EDAD,data.ORIGINARIO,data.FECHA_NACIMIENTO,data.NOMBRE_DEL_PADRE,data.NOMBRE_DE_LA_MADRE,data.DOMICILIO,data.IMAGEN,data.SEXO);
    console.log(detenidoData);
    const response = this.http.post<DetenidosI>(`http://127.0.0.1:8000/api/remitidos/create`, detenidoData).pipe(
      catchError(this.handleError)
    );
    return response;
  }


  // Editar / Actualziar detenidosData

  public update(id: number, detenidosData: FormGroup): Observable<any> {
    const data = detenidosData.value;
    let detenidoData = new Detenidos(data.id_REMITIDOS,data.NOMBRE,data.APELLIDO_PATERNO,data.APELLIDO_MATERNO,data.EDAD,data.ORIGINARIO,data.FECHA_NACIMIENTO,data.NOMBRE_DEL_PADRE,data.NOMBRE_DE_LA_MADRE,data.DOMICILIO,data.IMAGEN,data.SEXO);
    const response = this.http.put<any>(`http://127.0.0.1:8000/api/remitidos/remitido/${id}`, detenidoData).pipe(
      catchError(this.handleError)
    );
    return response;
  }

  // Eliminar detenidosData

  public delete(id: any): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/remitidos/remitido/${id}`).pipe(
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
