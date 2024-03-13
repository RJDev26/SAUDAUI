import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { VoucherComponent } from './Voucher/voucher.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TradeContractComponent } from './trade-contract/trade-contract.component';
import { ClosingRateComponent } from './closing-rate/closing-rate.component';

export const routes: Routes = [
  { path: '', redirectTo: 'voucher', pathMatch: 'full' },
  { path: 'voucher', component: VoucherComponent, data: { breadcrumb: 'Voucher' } },
  { path: 'trade-contract', component: TradeContractComponent, data: { breadcrumb: 'Trade' } },
  { path: 'closing-rate', component: ClosingRateComponent, data: { breadcrumb: 'Closing Rate' } },
  
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
          ClosingRateComponent,
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class EntryModule { }
