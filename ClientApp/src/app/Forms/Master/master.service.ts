import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { id } from '@swimlane/ngx-datatable';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  
  constructor(private httpClient: HttpClient) { }

  getAccounts():Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getAccountList',{headers:this.headers});
  }

  getState(): Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/GetState', {headers:this.headers});
  }

  getAcGoup(): Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getacgroup', {headers:this.headers});
  }

  getAcHead(): Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getAcHead', {headers:this.headers});
  }

  getCityListByStateId(id:number): Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getCity/' + id, {headers:this.headers})
  }

  getAccountById(id:number): Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getAccountId/' + id, {headers:this.headers})
  }

  deleteAccountById(id:number): Observable<any>{
    return this.httpClient.delete<any>(environment.apiBaseUrl + 'Master/deleteAccount/' + id, {headers:this.headers})
  }

  saveAccount(data): Observable<any>{
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/saveAccount', data, {headers:this.headers});
  }

  getTransporter():Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/gettransporterlist',{headers:this.headers});
  }

  saveTransporter(data): Observable<any>{
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/saveTransporter', data, {headers:this.headers});
  }

  getCityList(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getCityList', { headers: this.headers });
  }

  getTaxType(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getTaxName', { headers: this.headers });
  }

  getExchangeName(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getExchangeName', { headers: this.headers });
  }


  saveItem(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/saveItem', data, { headers: this.headers });
  }
  getItemById(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getItemId/' + id, { headers: this.headers })
  }
  deleteItem(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/deleteItem/' + id, { headers: this.headers })
  }

  getSaudaList(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getSaudaList', { headers: this.headers });
  }

  getItemListDrp(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getItemListDrp', { headers: this.headers });
  }

  getInstrumentList(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getInstrument', { headers: this.headers });
  }

  getOptionList(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getOption', { headers: this.headers });
  }
  saveSauda(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/saveSauda', data, { headers: this.headers });
  }

  getSaudaById(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getSaudaId/' + id, { headers: this.headers })
  }
  deleteSauda(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/deleteSauda/' + id, { headers: this.headers })
  }


}
