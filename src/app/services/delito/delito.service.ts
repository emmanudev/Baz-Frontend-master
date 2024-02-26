import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { Delito, DelitoI } from 'src/app/components/interfaces/Delito';

@Injectable({
  providedIn: 'root'
})
export class DelitoService {

  constructor(private http:HttpClient) { }
 //Obtener delitos
 public getList(): Observable<DelitoI[]> {
  return this.http.get<DelitoI[]>(`http://localhost:8080/delito/list`).pipe(
    catchError(this.handleError)
  );
}

//Obtener delito por id
public getItem(id: number): Observable<Delito> {
  const response = this.http.get<DelitoI>(`http://localhost:8080/delito/${id}`).pipe(
    catchError(this.handleError)
  );
  return response;
}

//Creador de delito
public create(delitoData: FormGroup): Observable<DelitoI> {
  const data = delitoData.value;
  let deliData = new Delito(data.Id_delito, data.Tipo_Delito, data.Subtipo, data.Modalidad);
  console.log(deliData);
  const response = this.http.post<DelitoI>(`http://localhost:8080/delito/add`, deliData).pipe(
    catchError(this.handleError)
  );
  return response;
}

// Editar / Actualziar delito

public update(id: number, delitoData: FormGroup): Observable<any> {
  const data = delitoData.value;
  let deliData = new Delito(data.Id_delito, data.Tipo_Delito, data.Subtipo, data.Modalidad);
  const response = this.http.put<any>(`http://localhost:8080/delito/update/${id}`, deliData).pipe(
    catchError(this.handleError)
  );
  return response;
}

// Eliminar delito

public delete(id: any): Observable<any> {
  return this.http.delete(`http://localhost:8080/delito/delete/${id}`).pipe(
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
