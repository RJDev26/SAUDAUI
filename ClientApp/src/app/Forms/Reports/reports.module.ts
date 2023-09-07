import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TrailBalanceComponent } from './trail-balance/trail-balance.component';
import { LedgerReportComponent } from './ledger-report/ledger-report.component';
import { SubLedgerReportComponent } from './sub-ledger-report/sub-ledger-report.component';

export const routes: Routes = [
  { path: '', redirectTo: 'reports', pathMatch: 'full' },
  { path: 'trail-balance', component: TrailBalanceComponent, data: { breadcrumb: 'Trail Balance' } },
  { path: 'ledger-report', component: LedgerReportComponent, data: { breadcrumb: 'Ledger Report' } },
  { path: 'single-ledger-report',pathMatch: 'prefix', component: SubLedgerReportComponent, data: { breadcrumb: 'Single Ledger Report' } },
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
  
    TrailBalanceComponent,
        LedgerReportComponent,
        SubLedgerReportComponent
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class ReportsModule { }
