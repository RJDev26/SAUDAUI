import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TrailBalanceComponent } from './trail-balance/trail-balance.component';

export const routes: Routes = [
  { path: '', redirectTo: 'reports', pathMatch: 'full' },
  { path: 'trail-balance', component: TrailBalanceComponent, data: { breadcrumb: 'Reports' } },
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
  
    TrailBalanceComponent
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class ReportsModule { }
