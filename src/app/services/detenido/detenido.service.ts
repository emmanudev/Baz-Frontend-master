import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetenidosService {

  constructor(private http:HttpClient) { }

  public crear(detenidoData : FormGroup) : Observable<any>{
    const req = new HttpRequest('POST', `http://localhost:8080/usuario/login`, detenidoData.value, {
      reportProgress: true,
      responseType: 'json'
    });
    console.log(req);
    return this.http.request(req);
  }


}