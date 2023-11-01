import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  
  constructor(private httpClient: HttpClient) { }

  getTrialBalance(data):Observable<any>{
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Report/getTrialBalance', data, {headers:this.headers});
  }

  getLedger(data):Observable<any>{
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Report/getLedger', data, {headers:this.headers});
  }

  getTradeRegister(data):Observable<any>{
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Trade/getTradeRegister', data, {headers:this.headers});
  }

  getLedgerSummary(data):Observable<any>{
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Report/getLedgerSummary', data, {headers:this.headers});
  }

  deleteContract(tradeNo: string): Observable<any> {
    const url = `${environment.apiBaseUrl}Trade/deleteContractById`;
    return this.httpClient.delete(url, { headers: this.headers, body: {tradeNo:tradeNo} });
  }

}
