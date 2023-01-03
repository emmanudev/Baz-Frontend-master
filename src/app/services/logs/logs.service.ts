import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TablasQA } from 'src/app/components/interfaces/tablasQA';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(private http : HttpClient) { }


  getLogs() : Observable<TablasQA | any>{
    return this.http.get<TablasQA[] | any[]>(`http://10.51.205.1:8080/extractos/logs`);
  }
  
}
