import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  
  constructor(private httpClient: HttpClient) { }

  saveAccountsData(data:any): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'saveAccounts' , data, { headers: this.headers });
  }

  getAccounts():Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Customer/getCustomer',{headers:this.headers});
  }

  getitems():Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getitemlist',{headers:this.headers});
  }

  deleteAccount(id:Number):Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'deleteAccount/' + id,{headers:this.headers});
  }

  getCity(): Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/GetState', {headers:this.headers});
  }

  saveAccount(data): Observable<any>{
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/saveAccount', data, {headers:this.headers});
  }

  getProduct():Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getProductList',{headers:this.headers});
  }

  getContract():Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getContractList',{headers:this.headers});
  }

  getCompany():Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getCompanyList',{headers:this.headers});
  }

  getBrokerageSetupList():Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getBrokeageSetupList',{headers:this.headers});
  }
}
