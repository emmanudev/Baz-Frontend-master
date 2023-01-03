import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TablasQA } from '../../components/interfaces/tablasQA';

@Injectable({
  providedIn: 'root'
})

export class QAService {
  genQA : FormGroup | any;

  constructor(private http : HttpClient) { }

  getQAfecha(fechaExtractos: string) : Observable<TablasQA | any>{
    return this.http.get(`http://10.51.205.1:8080/generateQa/${fechaExtractos}`);
  }

  getExtractosEnLifecha(fechaExtractos: string) : Observable<TablasQA | any>{
    return this.http.get(`http://10.51.205.1:8080/generatextractosel/${fechaExtractos}`);
  }

  getCorreoFecha(fechaExtractos: string) : Observable<TablasQA | any>{
    return this.http.get(`http://10.51.205.1:8080/correo/${fechaExtractos}`);
  }

  getLogs() : Observable<TablasQA | any>{
    return this.http.get(`http://10.51.205.1:8080/extractos/logs`);
  }  
}
