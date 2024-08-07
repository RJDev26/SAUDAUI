import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { AgGridModule } from 'ag-grid-angular';
import { LogsComponent } from './logs/logs.component';
import { NewAccountLogComponent } from './logs/new-account-log/new-account-log.component';
import { MissingTradeComponent } from './logs/missing-trade/missing-trade.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

export const routes: Routes = [
  { path: '', component: LogsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,
    AgGridModule  
  ],
  declarations: [
    LogsComponent,
    NewAccountLogComponent,
    MissingTradeComponent,
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class LogsModule { }
