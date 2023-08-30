import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  
  constructor(private httpClient: HttpClient) { }

  getVouType(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Voucher/getVouType', { headers: this.headers });
  }
  saveVoucher(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Voucher/saveVoucher', data, { headers: this.headers });
  }

}
