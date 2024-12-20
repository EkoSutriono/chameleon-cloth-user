import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  category: string = ''
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

  constructor(
    public route: Router,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.category = String(params['id']);
    });
  }

  handleName(v: string) {
    if (v === 'all-product') return 'Semua Produk'
    else return v
  }

  navigateToDetail(items: any) {
    const productName = btoa(items);
    this.route.navigate(['detail'], { queryParams: { product: productName } });
  }
}
