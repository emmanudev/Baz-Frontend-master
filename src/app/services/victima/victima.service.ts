import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VictimaService {

  constructor(private http:HttpClient) { }

  public crear(victimaData : FormGroup) : Observable<any>{
    const req = new HttpRequest('POST', `http://localhost:8080/usuario/login`, victimaData.value, {
      reportProgress: true,
      responseType: 'json'
    });
    console.log(req);
    return this.http.request(req);
  }

}
