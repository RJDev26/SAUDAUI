import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  
  constructor(private httpClient: HttpClient) { }

  logType(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Common/logType', { headers: this.headers })
  }

  getImportLog(data):Observable<any>{
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Import/getImportLog', data, {headers:this.headers});
  }

  getMissingSymbol(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Import/getMissingSymbol/' + id, { headers: this.headers })
  }

  getNewAccount(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Import/getNewAccount/' + id, { headers: this.headers })
  }

}
