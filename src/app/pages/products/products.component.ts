import { Component, HostListener, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NzImageModule, NzRadioModule, FormsModule, NzBadgeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productName: string = '';
  selectedSize: string = '';
  total: number = 0
  imageUrl: string = 'https://chameleoncloth.com/assets/uploads/thumbnail_produk/G-34-202411270906-006_0.jpg'
  scale: number = 1.6;

  transformStyle: string = 'scale(1)';
  transformOrigin: string = '50% 50%';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const product = atob(params['product'])
      this.productName = product
    });
  }

  addTotal() {
    this.total += 1
  }

  minTotal() {
    if (this.total !== 0) this.total -= 1
  }

  onMouseOver() {
    this.transformStyle = `scale(${this.scale})`;
  }

  onMouseOut() {
    this.transformStyle = 'scale(1)';
  }

  onMouseMove(event: MouseEvent, container: HTMLElement) {
    const rect = container.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width) * 100;
    const offsetY = ((event.clientY - rect.top) / rect.height) * 100;
    this.transformOrigin = `${offsetX}% ${offsetY}%`;
  }
}
