import { Component } from '@angular/core';
import { MainProductComponent } from './components/main-product/main-product.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { CatalogComponent } from './components/catalog/catalog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainProductComponent, BestSellerComponent, CatalogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
