import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficaService {

  constructor(private http : HttpClient) {  }

  public getDataGrafica() : Observable<any> {
      return this.http.get<any[]>(`http://localhost:8080/delito/list`);
    }

    public getDataGraficaMes(mes : String) : Observable<any> {
      return this.http.get<any[]>(`http://localhost:8080/delito/list/`+mes);
    }
}
