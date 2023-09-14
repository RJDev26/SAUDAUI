import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ScriptsComponent } from './scripts/scripts.component';

export const routes: Routes = [
  { path: '', redirectTo: 'scripts', pathMatch: 'full' },
  { path: 'scripts', component: ScriptsComponent, data: { breadcrumb: 'Scripts' } },
  
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
    ScriptsComponent
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class ImportsModule { }
