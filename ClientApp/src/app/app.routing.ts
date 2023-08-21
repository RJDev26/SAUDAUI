import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router'; 

import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import { AccountComponent } from './Forms/Master/account/account.component';
import { ItemComponent } from './Forms/Master/item/item.component';
import { TransporterComponent } from './Forms/Master/transporter/transporter.component';
import { CompanyComponent } from './Forms/Master/company/company.component';
import { SaudaComponent } from './Forms/Master/sauda/sauda.component';
import { ProductComponent } from './Forms/Master/product/product.component';
import { ContractMasterComponent } from './Forms/Master/contract-master/contract-master.component';
import { BrokerageSlabComponent } from './Forms/Master/brokerage-slab/brokerage-slab.component';
import { BrokerageSetupComponent } from './Forms/Master/brokerage-setup/brokerage-setup.component';
import { TaxComponent } from './Forms/Master/tax-master/tax-master.component';
import { AccountHeadComponent } from './Forms/Master/account-head/account-head.component';
import { SymbolMappingComponent } from './Forms/Master/symbol-mapping/symbol-mapping.component';
import { ItemGroupComponent } from './Forms/Master/item-group/item-group.component';

export const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent, children: [
            { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' } },
            { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule), data: { breadcrumb: 'Users' } },
            { path: 'master', loadChildren: () => import('./Forms/Master/master.module').then(m => m.MasterModule), data: { breadcrumb: 'Master' } },
            { path: 'ui', loadChildren: () => import('./pages/ui/ui.module').then(m => m.UiModule), data: { breadcrumb: 'UI' } },
            { path: 'form-controls', loadChildren: () => import('./pages/form-controls/form-controls.module').then(m => m.FormControlsModule), data: { breadcrumb: 'Form Controls' } },
            { path: 'tables', loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule), data: { breadcrumb: 'Tables' } },
            { path: 'icons', loadChildren: () => import('./pages/icons/icons.module').then(m => m.IconsModule), data: { breadcrumb: 'Material Icons' } },
            { path: 'drag-drop', loadChildren: () => import('./pages/drag-drop/drag-drop.module').then(m => m.DragDropModule), data: { breadcrumb: 'Drag & Drop' } },
            { path: 'schedule', loadChildren: () => import('./pages/schedule/schedule.module').then(m => m.ScheduleModule), data: { breadcrumb: 'Schedule' } },
            { path: 'mailbox', loadChildren: () => import('./pages/mailbox/mailbox.module').then(m => m.MailboxModule), data: { breadcrumb: 'Mailbox' } },
            { path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule), data: { breadcrumb: 'Chat' } },
            { path: 'maps', loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsModule), data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsModule), data: { breadcrumb: 'Charts' } },
            { path: 'dynamic-menu', loadChildren: () => import('./pages/dynamic-menu/dynamic-menu.module').then(m => m.DynamicMenuModule), data: { breadcrumb: 'Dynamic Menu' }  },          
            { path: 'profile', loadChildren: () => import ('./pages/profile/profile.module').then(m => m.ProfileModule), data: { breadcrumb: 'Profile' } }, 
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },
            { path: 'account', component: AccountComponent, data: { breadcrumb: 'Account' } },
            { path: 'item', component: ItemComponent, data: { breadcrumb: 'Item' } },
            { path: 'transporter', component: TransporterComponent, data: { breadcrumb: 'Transporter' } },
            { path: 'company', component: CompanyComponent, data: { breadcrumb: 'company' } },
            { path: 'sauda', component: SaudaComponent, data: { breadcrumb: 'sauda' } },
            { path: 'product', component: ProductComponent, data: { breadcrumb: 'product' } },
            { path: 'contract-master', component: ContractMasterComponent, data: { breadcrumb: 'Contract Master' } },
            { path: 'brokerage-slab', component: BrokerageSlabComponent, data: { breadcrumb: 'Brokerage Slab' } },
            { path: 'tax', component: TaxComponent, data: { breadcrumb: 'Tax' } },
            { path: 'account-head', component: AccountHeadComponent, data: { breadcrumb: 'Account Head' } },
            { path: 'symbol-mapping', component: SymbolMappingComponent, data: { breadcrumb: 'Symbol Mapping' } },
            { path: 'item-group', component: ItemGroupComponent, data: { breadcrumb: 'Item Group' } }
           
        ]
    },
    { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
    { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: '**', component: NotFoundComponent }
]; 

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
            relativeLinkResolution: 'legacy',
            // useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
