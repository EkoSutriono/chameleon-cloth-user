import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        loadChildren: () =>
            import('./layouts/main-layout/main-layout.module').then(
              (m) => m.MainLayoutModule
            ),
    },
    {
        path: '',
        component: AuthLayoutComponent,
        loadChildren: () =>
            import('./layouts/auth-layout/auth-layout.module').then(
              (m) => m.AuthLayoutModule
            ),
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];
