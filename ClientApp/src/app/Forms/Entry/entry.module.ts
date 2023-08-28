import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { VoucherComponent } from './Voucher/voucher.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

export const routes: Routes = [
  { path: '', redirectTo: 'voucher', pathMatch: 'full' },
  { path: 'voucher', component: VoucherComponent, data: { breadcrumb: 'Voucher' } },
  
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
    
    VoucherComponent
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class EntryModule { }
