import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { EditProfileComponent } from '../../pages/profile/pages/edit-profile/edit-profile.component';
import { CategoriesComponent } from '../../pages/categories/categories.component';
import { ProductsComponent } from '../../pages/products/products.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    {
        path: 'home',
        component: HomeComponent,
      },
    {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent,
      },
      {
        path: 'category/:id',
        component: CategoriesComponent,
      },
      {
        path: 'detail',
        component: ProductsComponent,
      },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class MainLayoutRoutingModule {}
