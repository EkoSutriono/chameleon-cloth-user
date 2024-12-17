import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';

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
        path: 'login',
        component: AuthLayoutComponent,
    },
    {
        path: 'home',
        component: MainLayoutComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];
