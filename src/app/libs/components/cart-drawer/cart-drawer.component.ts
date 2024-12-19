import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [NzDrawerModule, NzCardModule, NzImageModule, NzIconModule],
  templateUrl: './cart-drawer.component.html',
  styleUrl: './cart-drawer.component.css'
})
export class CartDrawerComponent {
  @Output() closeDrawer = new EventEmitter<void>();
  @Input()visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
    this.closeDrawer.emit();
  }
}
