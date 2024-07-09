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
  
  getVoucher(vouType: any, vouDate: any): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + `Voucher/getVoucher/${vouType}/${vouDate}`, { headers: this.headers });
  }
  
  saveVoucher(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Voucher/saveVoucher', data, { headers: this.headers });
  }
  
  editVoucher(vocherMasterId): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + `Voucher/editVoucher/${vocherMasterId}`, { headers: this.headers });
  }
  
  getVoucherCreator(vouMasterId): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + `Voucher/getVoucherCreator/${vouMasterId}`, { headers: this.headers});
  }
  
  getVoucherAudit(vouMasterId): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + `Voucher/getVoucherAudit/${vouMasterId}`, { headers: this.headers});
  }

  deleteVoucher(vouMasterId: number): Observable<any> {
    return this.httpClient.delete<any>(environment.apiBaseUrl + `Voucher/deleteVoucher/${vouMasterId}`, { headers: this.headers })
  }
  
  saveCtrD(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Trade/SaveCtrD', data, { headers: this.headers });
  }

  saveClosing(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Entry/SaveClosing', data, { headers: this.headers });
  }

  getClosing(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Entry/getClosing', data, { headers: this.headers });
  }

  editClosing(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + `Entry/editClosing/${data}`, { headers: this.headers });
  }

  getTradeFileList(conDate: any): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Trade/getContractDate/' +conDate, { headers: this.headers });
  }

  importClosing(payload: string): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Entry/importClosing/' +payload, { headers: this.headers });
  }

  deleteContract(tradeNo: string, condate: string): Observable<any> {
    const url = `${environment.apiBaseUrl}Trade/deleteContract`;
    return this.httpClient.delete(url, { headers: this.headers, body: {tradeNo:tradeNo, condate:condate} });
  }

  deleteClosingMultiple(ids): Observable<any> {
    const url = `${environment.apiBaseUrl}Entry/deleteClosingMultiple/${ids}`;
    return this.httpClient.delete(url, { headers: this.headers});
  }

  editContract(id: number): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + `Trade/editContract/${id}`, { headers: this.headers })
  }

  getVoutypeEntry(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getVoutypeEntry', { headers: this.headers });
  }

}
