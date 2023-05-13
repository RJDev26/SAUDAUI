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
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Customer/getCustomer',{headers:this.headers});
  }

  getState(): Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/GetState', {headers:this.headers});
  }

  getAcGoup(): Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getAcGoup', {headers:this.headers});
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

}
