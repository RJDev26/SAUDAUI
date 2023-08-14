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

  deleteExchange(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/deleteExchange/' + id, { headers: this.headers })
  }

  deleteSymbolMapping(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/deleteSymbolMapping/' + id, { headers: this.headers })
  }

  deleteInterest(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/deleteInterest/' + id, { headers: this.headers })
  }

  deleteExchangeTax(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/deleteExchangeTax/' + id, { headers: this.headers })
  }

  deleteExchangeAccount(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/deleteExchangeAccount/' + id, { headers: this.headers })
  }

  getApplyOnTaxAccountDDL(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Common/getApplyOnTaxAccountDDL', { headers: this.headers });
  }

  addAccountTax(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'MasterSecond/SaveAccountTax', data, { headers: this.headers });
  }

  saveExchangeAccount(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'MasterSecond/SaveExchangeAccount', data, { headers: this.headers });
  }

  saveInterest(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'MasterSecond/SaveInterest', data, { headers: this.headers });
  }
  saveSymbolMapping(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'MasterSecond/saveSymbolMapping', data, { headers: this.headers });
  }

  saveExchangeTax(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'MasterSecond/SaveExchangeTax', data, { headers: this.headers });
  }
  saveTax(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'MasterSecond/SaveTax', data, { headers: this.headers });
  }
  saveExchange(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'MasterSecond/SaveExchange', data, { headers: this.headers });
  }
  getTaxById(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getTaxId/' + id, { headers: this.headers })
  }
  getInterestId(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getInterestId/' + id, { headers: this.headers })
  }

  getSymbolMappingId(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getSymbolMappingId/' + id, { headers: this.headers })
  }
  getExchangeId(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getExchangeId/' + id, { headers: this.headers })
  }
  getTax(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getTaxList', { headers: this.headers });
  }
  getExchangeList(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getExchangeList', { headers: this.headers });
  }

  getSymbolMappingList(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getSymbolMappingList', { headers: this.headers });
  }

  getInterestList(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getInterestList', { headers: this.headers });
  }
  getTaxAccountList(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getAccountTaxList/' + id, { headers: this.headers })
  }

  getExchangeAccountList(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getExchangeAccountList/' + id, { headers: this.headers })
  }
  
  getExchangeTaxList(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getExchangeTaxList/' + id, { headers: this.headers })
  }

  getTaxAccountId(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getAccountTaxId/' + id, { headers: this.headers })
  }
  deleteAccountTax(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'MasterSecond/deleteAccountTax', data, { headers: this.headers });
  }

  

  getApplyOnFileShareDDL(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'MasterSecond/getApplyOnFileShareDDL', { headers: this.headers })
  }
}
