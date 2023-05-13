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

export const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'account', component: AccountComponent, data: { breadcrumb: 'Account' } },
  { path: 'item', component: ItemComponent, data: { breadcrumb: 'Item' } },
  { path: 'transporter', component: TransporterComponent, data: { breadcrumb: 'Transporter' } },
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
    TransporterComponent
  ],
})
export class MasterModule { }
