import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CartDrawerComponent } from '../../../../libs/components/cart-drawer/cart-drawer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NzIconModule, NzBadgeModule, NzDropDownModule, CartDrawerComponent, NzLayoutModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() visible: boolean = false;
  @Input() active: boolean = false;
  @Output() collapseToogle = new EventEmitter();
  
  categories = [
    { name: 'Accessories' },
    { name: 'Celana' },
    { name: 'Jas' },
    { name: 'Kemeja' },
    { name: 'Textile' },
    { name: 'Jacket' },
    { name: 'Beskap' },
    { name: 'Setelan' },
    { name: 'Vest' },
  ];
  isShow: boolean = false
  isColection: boolean = false

  collapseClick(): void {
    this.visible = true
    this.collapseToogle.emit(this.visible);
  }

  onDrawerClose(): void {
    this.visible = false;
  }
}
