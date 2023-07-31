import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { id } from '@swimlane/ngx-datatable';

@Injectable({
  providedIn: 'root'
})
export class MasterSecondService {
  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  
  constructor(private httpClient: HttpClient) { }
  

  deleteTax(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/deleteTax/' + id, { headers: this.headers })
  }

  getApplyOnTaxAccountDDL(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Common/getApplyOnTaxAccountDDL', { headers: this.headers });
  }

  addAccountTax(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'MasterSecond/SaveAccountTax', data, { headers: this.headers });
  }
  saveTax(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'MasterSecond/SaveTax', data, { headers: this.headers });
  }
  getTaxById(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getTaxId/' + id, { headers: this.headers })
  }
  getTax(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getTaxList', { headers: this.headers });
  }
  getTaxAccountList(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getAccountTaxList/' + id, { headers: this.headers })
  }

  getTaxAccountId(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getAccountTaxId/' + id, { headers: this.headers })
  }
  deleteAccountTax(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'MasterSecond/deleteAccountTax', data, { headers: this.headers });
  }

}
