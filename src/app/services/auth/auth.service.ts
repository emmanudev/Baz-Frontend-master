import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { UserResponse } from 'src/app/components/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(authData : FormGroup) : Observable<UserResponse | any>{
    const req = new HttpRequest('POST', `http://localhost:8080/usuario/login`, authData.value, {
      reportProgress: true,
      responseType: 'json'
    });
    console.log(req);
    return this.http.request(req);
  }

  logout():void{}

  private handlerError(err: { message: any; }): Observable<never>{
    let errorMessage = 'Se produjo un error al recuperar datos';
    if(err){
      errorMessage = `Error code : ${err.message}`;
    }
    window.alert(errorMessage)
    return throwError(() => new Error(errorMessage));
  }
}
