import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

export const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'account', component: AccountComponent, data: { breadcrumb: 'Account' } },
  { path: 'item', component: ItemComponent, data: { breadcrumb: 'Item' } },
  { path: 'transporter', component: TransporterComponent, data: { breadcrumb: 'Transporter' } },
  { path: 'company', component: CompanyComponent, data: { breadcrumb: 'Company' } },
  { path: 'sauda', component: SaudaComponent, data: { breadcrumb: 'Sauda' } },
  { path: 'product', component: ProductComponent, data: { breadcrumb: 'Product' } },
  { path: 'contract-master', component: ContractMasterComponent, data: { breadcrumb: 'Contract Master' } },
  { path: 'brokerage-slab', component: BrokerageSlabComponent, data: { breadcrumb: 'Brokerage Slab' } },
  { path: 'brokerage-setup', component: BrokerageSetupComponent, data: { breadcrumb: 'Brokerage Setup' } },
  { path: 'branch', component: BranchComponent, data: { breadcrumb: 'Branch' } },
  { path: 'tax', component: TaxComponent, data: { breadcrumb: 'Tax' } }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AgGridModule
  ],
  declarations: [
    AccountComponent,
    AddAccountComponent,
    AddTransporterComponent,
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
    BrokerageSetupComponent,
     ErrorDialog,
     AddSlabDetailsComponent,
     AddSlabComponent,
     AddAccountComponent,
     AddSetupDetailsComponent,
     BranchComponent,
     TaxComponent,
     AddTaxComponent,
     AddBranchAccountComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class MasterModule { }
