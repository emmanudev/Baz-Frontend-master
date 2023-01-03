import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { Datos } from 'src/app/components/interfaces/Datos';

@Injectable({
  providedIn: 'root'
})
export class DatosdelitoService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  public create(datedataF : FormGroup) : Observable<Datos | any>{
    const data = datedataF.value
    console.log("Contenido");
    let datedata = new Datos(null,data.Colonia,data.Zona,data.Region,data.Calle1,data.Calle2,data.Numero, data.Adscripcion,data.Impacto,data.Y, data.X);
    console.log(datedata);
    const response = this.http.post(`http://localhost:8080/dato/add`, datedata).pipe(
      catchError(this.handleError)
    );
    return response;
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
