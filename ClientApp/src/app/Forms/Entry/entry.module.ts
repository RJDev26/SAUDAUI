import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { VoucherComponent } from './Voucher/voucher.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TradeContractComponent } from './trade-contract/trade-contract.component';

export const routes: Routes = [
  { path: '', redirectTo: 'voucher', pathMatch: 'full' },
  { path: 'voucher', component: VoucherComponent, data: { breadcrumb: 'Voucher' } },
  { path: 'trade-contract', component: TradeContractComponent, data: { breadcrumb: 'Trade' } },
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AgGridModule,
    SharedModule,
  ],
  declarations: [
    
    VoucherComponent,
          TradeContractComponent,
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class EntryModule { }
