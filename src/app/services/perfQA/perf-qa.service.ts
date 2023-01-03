import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TablasQA } from 'src/app/components/interfaces/tablasQA';

@Injectable({
  providedIn: 'root'
})
export class PerfQAService {

  constructor(private http:HttpClient) { }

  getPerfQAfecha(fechaExtractos: string) : Observable<TablasQA | any>{
    return this.http.get(`http://10.51.205.1:8080/perfqa/generate/${fechaExtractos}`);
  }

  getCorreoFecha(fechaExtractos: string) : Observable<TablasQA | any>{
    return this.http.get(`http://10.51.205.1:8080/perfqa/correo/${fechaExtractos}`);
  }

}
