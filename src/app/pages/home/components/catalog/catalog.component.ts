import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  listProduct: any = [
    {
      name: 'Premium Basic Suit - Green Emerald',
      photo: 'https://chameleoncloth.com/assets/uploads/thumbnail_new_arrival/PGE.jpg',
    },
    {
      name: 'Basic Suit - Coast',
      photo: 'https://chameleoncloth.com/assets/uploads/thumbnail_produk/G-18-202408192026-006_0.jpg',
    },
    {
      name: 'Basic Suit - Denim',
      photo: 'https://chameleoncloth.com/assets/uploads/thumbnail_produk/G-18-202408140848-006_0.jpg',
    },
    {
      name: 'Basic Suit - Choco',
      photo: 'https://chameleoncloth.com/assets/uploads/thumbnail_new_arrival/CC-18-202302230849-009_0.png',
    },
    {
      name: 'Tuxedo - Cream',
      photo: 'https://chameleoncloth.com/assets/uploads/thumbnail_new_arrival/CC-14-202309082125-010_0.jpg',
    },
    {
      name: 'Premium Basic Suit - Green Emerald',
      photo: 'https://chameleoncloth.com/assets/uploads/thumbnail_new_arrival/PGE.jpg',
    },
    {
      name: 'Basic Suit - Coast',
      photo: 'https://chameleoncloth.com/assets/uploads/thumbnail_produk/G-18-202408192026-006_0.jpg',
    },
    {
      name: 'Basic Suit - Denim',
      photo: 'https://chameleoncloth.com/assets/uploads/thumbnail_produk/G-18-202408140848-006_0.jpg',
    },
    {
      name: 'Basic Suit - Choco',
      photo: 'https://chameleoncloth.com/assets/uploads/thumbnail_new_arrival/CC-18-202302230849-009_0.png',
    },
    {
      name: 'Tuxedo - Cream',
      photo: 'https://chameleoncloth.com/assets/uploads/thumbnail_new_arrival/CC-14-202309082125-010_0.jpg',
    },
  ]

}
