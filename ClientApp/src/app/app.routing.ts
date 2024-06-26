import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router'; 

import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthChildGuard } from './guards/auth-child.guard';

export const routes: Routes = [
    { 
        path: '', 
        canActivate: [AuthGuard],
        canActivateChild: [AuthChildGuard],
        component: PagesComponent,
        children: [
            { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' } },
            { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule), data: { breadcrumb: 'Users' } },
            { path: 'logs', loadChildren: () => import('./Forms/Logs/logs.module').then(m => m.LogsModule), data: { breadcrumb: 'Logs' } },
            { path: 'user-roles', loadChildren: () => import('../app/Forms/User/user.module').then(m => m.UserModule), data: { breadcrumb: 'Users & Roles' } },
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
            { path: 'entry', loadChildren: () => import('./Forms/Entry/entry.module').then(m => m.EntryModule), data: { breadcrumb: 'Entry' } },
            { path: 'reports', loadChildren: () => import('./Forms/Reports/reports.module').then(m => m.ReportsModule), data: { breadcrumb: 'Reports' } },
            { path: 'imports', loadChildren: () => import('./Forms/Imports/imports.module').then(m => m.ImportsModule), data: { breadcrumb: 'Imports' } },
           
        ]
    },
    { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
    { path: 'login', loadChildren: () => import('../app/Forms/Login/login.module').then(m => m.LoginModule) },
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
    ],
    providers:[AuthGuard, AuthChildGuard],
})
export class AppRoutingModule { }
