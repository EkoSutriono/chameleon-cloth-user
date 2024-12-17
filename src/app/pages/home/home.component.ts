import { Component } from '@angular/core';
import { MainProductComponent } from './components/main-product/main-product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
