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

  getInstrument(): Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getInstrument', {headers:this.headers});
  }

  getOption(): Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getOption', {headers:this.headers});
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

  getFileCodeList(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getFileCodeList/' + id, { headers: this.headers });
  }

  getItemListExchange(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getItemListExchange/' + id, { headers: this.headers })
  }

  getFileCodeId(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getFileCodeId/' + id, { headers: this.headers })
  }

  deleteAcFileCode(id: number): Observable<any> {
    return this.httpClient.delete<any>(environment.apiBaseUrl + 'Master/deleteAcFileCode/' + id, { headers: this.headers })
  }
  
  saveAcFileCode(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/SaveAcFileCode', data, { headers: this.headers });
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
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getItemListDDL', { headers: this.headers });
  }

  getApplyOnQtyDDL(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getApplyOnQtyDDL', { headers: this.headers });
  }

  getApplyOnDDL(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getApplyOnDDL', { headers: this.headers });
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

  getProductById(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getProductId/' + id, { headers: this.headers })
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/deleteProduct/' + id, { headers: this.headers })
  }

  saveProduct(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/SaveProduct', data, { headers: this.headers });
  }

  getAccountTaxList(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getAccountTaxList/' + id, { headers: this.headers });
  }

  saveAccountTax(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/saveAccountTax', data, { headers: this.headers });
  }

  getAccountTaxById(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getAccountTaxId/' + id, { headers: this.headers })
  }

  deleteAccountTax(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/deleteAccountTax/' + id, { headers: this.headers })
  }

  saveContract(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/SaveContract', data, { headers: this.headers });
  }

  getContractById(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getContractId/' + id, { headers: this.headers })
  }

  deleteContract(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/deleteContract/' + id, { headers: this.headers })
  }
  getSlabDDL(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getBrokeageSlabDDL/', { headers: this.headers })
  }

  getSlabList(slabId: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + `master/getBrokeageSlabList/${slabId}`, { headers: this.headers })
  }

  getCompanyById(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getCompanyId/' + id, { headers: this.headers })
  }

  saveCompany(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/SaveCompany', data, { headers: this.headers });
  }
  getBranchDDLList(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getBranchDDL', { headers: this.headers })
  }
  getFilterBranchAccounts(branchIds:any): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getFilterBranchAccounts/' + branchIds, { headers: this.headers })
  }
  saveBrokerageSlabName(slabName: string): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + `master/SaveBrokerageSlabName?name=${slabName}`, { headers: this.headers })
  }

  deleteSlabMaster(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/deleteSlabMaster/' + id, { headers: this.headers })
  }

  deleteSlabDetail(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/deleteSlabDetail/' + id, { headers: this.headers })
  }

  deleteBrokerageSetup(id: number): Observable<any> {
    return this.httpClient.delete<any>(environment.apiBaseUrl + 'master/deleteBrokerageSetup/' + id, { headers: this.headers })
  }

  saveBrokerageSlab(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/SaveBrokerageSlab', data, { headers: this.headers });
  }

  getBrokerageSlabId(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getBrokerageSlabId/' + id, { headers: this.headers })
  }

  applySlab(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/applyBrokerageSlab', data, { headers: this.headers });
  }

  getAccount(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getAccount', { headers: this.headers });
  }

  saveBrokerageSetup(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/SaveBrokerageSetup', data, { headers: this.headers });
  }

  getBrokeageSetupList(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getBrokeageSetupList/', { headers: this.headers })
  }

  getBrokerageSetupId(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getBrokerageSetupId/' + id, { headers: this.headers })
  }

  deleteBranch(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/deleteBranch/' + id, { headers: this.headers })
  }

  deleteAcHead(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/deleteAcHead/' + id, { headers: this.headers })
  }

  getApplyOn(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Common/getApplyOnTaxDDL', { headers: this.headers });
  }


  getAccountHead():Observable<any>{
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getAcHead',{headers:this.headers});
  }

  saveAccountHead(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/SaveAcHead', data, { headers: this.headers });
  }
  

  saveBranch(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/saveBranch', data, { headers: this.headers });
  }

  getBranchList(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getBranchList', { headers: this.headers })
  }

  getBranchId(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getBranchId/' + id, { headers: this.headers })
  }

  getBranchAccountsID(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getBranchAccounts/' + id, { headers: this.headers })
  }

  addBranchAccount(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/AddBranchAccount', data, { headers: this.headers });
  }

  deleteBranchAccount(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/deleteBranchAccount', data, { headers: this.headers });
  }

  getApplyOnTaxAccountDDL(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Common/getApplyOnTaxAccountDDL', { headers: this.headers });
  }

  getAccountsForBranch(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getAccountsForBranch/' + id, { headers: this.headers })
  }
  getAccountsAddedinBranch(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getBranchAccountList/' + id, { headers: this.headers })
  }

  getAccountsAddedinAcHead(headId): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Master/getHeadAccountList/' + headId, { headers: this.headers })
  }

  getAcHeadId(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getAcHeadId/' + id, { headers: this.headers })
  }

  addAcHead(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/AddHeadAccount', data, { headers: this.headers });
  }

  deleteAcHeadAccount(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/deleteHeadAccount', data, { headers: this.headers });
  }

  getApplyOnFileShareDDL(): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'Common/getApplyOnFileShareDDL', { headers: this.headers })
  }

  getAccountSelfShareEdit(id: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getAccountSelfShareEdit/' + id, { headers: this.headers })
  }

  deleteAccountSelfShare(id: number): Observable<any> {
    return this.httpClient.delete<any>(environment.apiBaseUrl + 'master/deleteAccountSelfShare/' + id, { headers: this.headers })
  }

  saveAccountSelfShare(data): Observable<any> {
    return this.httpClient.post<any>(environment.apiBaseUrl + 'Master/saveAccountSelfShare', data, { headers: this.headers });
  }
  getAccountSelfShareList(accountId: number): Observable<any> {
    return this.httpClient.get<any>(environment.apiBaseUrl + 'master/getAccountSelfShareList/' + accountId, { headers: this.headers })
  }

}
