import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjetosService {

  
  constructor(private http:HttpClient) { }

  public crear(objetosData : FormGroup) : Observable<any>{
    const req = new HttpRequest('POST', `http://localhost:8080/usuario/login`, objetosData.value, {
      reportProgress: true,
      responseType: 'json'
    });
    console.log(req);
    return this.http.request(req);
  }
}
