import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AccountComponent } from './account/account.component';
import { AddAccountComponent } from './account/account-dialog/add-account.component';
import { AddTransporterComponent } from './transporter/transporter-dialog/add-transporter.component';
import { AgGridModule } from 'ag-grid-angular';
import { ItemComponent } from './item/item.component';
import { TransporterComponent } from './transporter/transporter.component';
import { CompanyComponent } from './company/company.component';
import { AddCompanyComponent } from './company/company-dialog/add-company.component';
import { AddItemComponent } from './item/item-dialog/add-item.component';
import { SaudaComponent } from './sauda/sauda.component';
import { AddSaudaComponent } from './sauda/sauda-dialog/add-sauda.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/product-dialog/add-product.component';
import { ContractMasterComponent } from './contract-master/contract-master.component';
import { ExchangeTaxListComponent } from './exchange-tax-list/exchange-tax-list.component';
import { AccountTaxListComponent } from './account-tax-list/account-tax-list.component';
import { AddContractMasterComponent } from './contract-master/contract-master-dialog/add-contract-master.component';
import { BrokerageSlabComponent } from './brokerage-slab/brokerage-slab.component';
import { ConfirmationDialog } from '../Dialog/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialog } from '../Dialog/confirmation-dialog/error-dialog.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrokerageSetupComponent } from './brokerage-setup/brokerage-setup.component';
import { AddSlabDetailsComponent } from './brokerage-slab/add-slab-details/add-slab-details.component';
import { AddSlabComponent } from './brokerage-slab/add-slab/add-slab.component';
import { AddSetupDetailsComponent } from './brokerage-setup/add-setup-details/add-setup-details.component';
import { BranchComponent } from './branch/branch.component';
import { TaxComponent } from './tax-master/tax-master.component';
import { AddTaxComponent } from './tax-master/tax-dialog/add-tax-master.component';
import { AddBranchAccountComponent } from './branch/add-branch-account/add-branch-account.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { AddExchangeComponent } from './exchange/add-exchange/add-exchange.component';
import { AccountHeadComponent } from './account-head/account-head.component';
import { AddAccountHeadComponent } from './account-head/add-account-head/add-account-head.component';
import { InterestMasterComponent } from './interest-master/interest-master.component';
import { AddInterestMasterComponent } from './interest-master/add-interest-master/add-interest-master.component';
import { SymbolMappingComponent } from './symbol-mapping/symbol-mapping.component';
import { AddInteresetComponent } from './account/account-dialog/add-intereset/add-intereset.component';
import { FileCodeTabComponent } from './account/account-dialog/file-code-tab/file-code-tab.component';
import { SelfShareTabComponent } from './account/account-dialog/self-share-tab/self-share-tab.component';
import { BrokerageTabComponent } from './account/account-dialog/brokerage-tab/brokerage-tab.component';
import { ConfirmationAccountDialog } from '../Dialog/confirmation-dialog/confirmation-account-dialog.component';
import { ItemGroupComponent } from './item-group/item-group.component';
import { AddItemGroupComponent } from './item-group/add-item-group/add-item-group.component';
import { LockBrokerageComponent } from './brokerage-setup/lock-brokerage/lock-brokerage.component';
import { ViewItemGroupComponent } from './brokerage-setup/view-item-group/view-item-group.component';
import { SubBrokerageSetupComponent } from './sub-brokerage-setup/sub-brokerage-setup.component';
import { SubAddSetupDetailsComponent } from './sub-brokerage-setup/sub-add-setup-details/sub-add-setup-details.component';
import { SubLockBrokerageComponent } from './sub-brokerage-setup/sub-lock-brokerage/sub-lock-brokerage.component';
import { SharingSetupComponent } from './sharing-setup/sharing-setup.component';
import { AddSharingSetupComponent } from './sharing-setup/add-sharing-setup/add-sharing-setup.component';
import { LockSharingSetupComponent } from './sharing-setup/lock-sharing-setup/lock-sharing-setup.component';
import { InviteUserComponent } from '../User/invite-user/invite-user.component';
import { changePasswordComponent } from '../User/change-password/change-password.component';
import { ContractDialogComponent } from './item/contract-dialog/contract-dialog.component';
import { TradeFileComponent } from './trade-file/trade-file.component';
import { ImportDialogComponent } from './sauda/import-dialog/import-dialog.component';

export const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'account', component: AccountComponent, data: { breadcrumb: 'Account' } },
  { path: 'account-tax-list', component: AccountTaxListComponent, data: { breadcrumb: 'Account Tax List' } },
  { path: 'item', component: ItemComponent, data: { breadcrumb: 'Item' } },
  { path: 'transporter', component: TransporterComponent, data: { breadcrumb: 'Transporter' } },
  { path: 'company', component: CompanyComponent, data: { breadcrumb: 'Company' } },
  { path: 'sauda', component: SaudaComponent, data: { breadcrumb: 'Sauda' } },
  { path: 'product', component: ProductComponent, data: { breadcrumb: 'Product' } },
  { path: 'contract-master', component: ContractMasterComponent, data: { breadcrumb: 'Contract Master' } },
  { path: 'brokerage-slab', component: BrokerageSlabComponent, data: { breadcrumb: 'Brokerage Slab' } },
  { path: 'brokerage-setup', component: BrokerageSetupComponent, data: { breadcrumb: 'Brokerage Setup' } },
  { path: 'exchange-tax-list', component: ExchangeTaxListComponent, data: { breadcrumb: 'Exchange Tax List' } },
  { path: 'sub-brokerage-setup', component: SubBrokerageSetupComponent, data: { breadcrumb: 'Sub Brokerage Setup' } },
  { path: 'sharing-setup', component: SharingSetupComponent, data: { breadcrumb: 'Sharing Setup' } },
  { path: 'branch', component: BranchComponent, data: { breadcrumb: 'Branch' } },
  { path: 'tax', component: TaxComponent, data: { breadcrumb: 'Tax' } },
  { path: 'trade-file', component: TradeFileComponent, data: { breadcrumb: 'Trade File' } },
  { path: 'exchange', component: ExchangeComponent, data: { breadcrumb: 'Exchange' } },
  { path: 'interest-master', component: InterestMasterComponent, data: { breadcrumb: 'Interest Master' } },
  { path: 'account-head', component: AccountHeadComponent, data: { breadcrumb: 'Account Head' } },
  { path: 'symbol-mapping', component: SymbolMappingComponent, data: { breadcrumb: 'Symbol Mapping' } },
  { path: 'item-group', component: ItemGroupComponent, data: { breadcrumb: 'Item Group' } },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AgGridModule,
  ],
  declarations: [
    AccountComponent,
    AddAccountComponent,
    AddTransporterComponent,
    AccountTaxListComponent,
    ItemComponent,
    AddItemComponent,
    TransporterComponent,
    CompanyComponent,
    AddCompanyComponent,
    SaudaComponent,
    AddSaudaComponent,
    ProductComponent,
    AddProductComponent,
    ContractMasterComponent,
    AddContractMasterComponent,
    BrokerageSlabComponent,
    ConfirmationDialog,
    ConfirmationAccountDialog,
    BrokerageSetupComponent,
     ErrorDialog,
     AddSlabDetailsComponent,
     AddSlabComponent,
     AddAccountComponent,
     AddSetupDetailsComponent,
     BranchComponent,
     TaxComponent,
     AddTaxComponent,
     AddBranchAccountComponent,
     AddExchangeComponent,
     AccountHeadComponent,
     AddAccountHeadComponent,
     InterestMasterComponent,
     AddInterestMasterComponent,
     SymbolMappingComponent,
     AddInteresetComponent,
     FileCodeTabComponent,
     SelfShareTabComponent,
     BrokerageTabComponent,
     ItemGroupComponent,
     AddItemGroupComponent,
     LockBrokerageComponent,
     ViewItemGroupComponent,
     SubBrokerageSetupComponent,
     SubAddSetupDetailsComponent,
     SubLockBrokerageComponent,
     SharingSetupComponent,
     AddSharingSetupComponent,
     LockSharingSetupComponent,
     InviteUserComponent,
     changePasswordComponent,
     ContractDialogComponent,
     TradeFileComponent,
     ImportDialogComponent,
     ExchangeTaxListComponent
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class MasterModule { }
