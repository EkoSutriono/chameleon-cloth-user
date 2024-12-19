import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCollapseModule, NzIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  animations: [
    trigger('collapseExpand', [
      state(
        'collapsed',
        style({
          height: '0px',
          opacity: 0,
          overflow: 'hidden',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          opacity: 1,
        })
      ),
      transition('collapsed => expanded', [animate('300ms ease-out')]),
      transition('expanded => collapsed', [animate('300ms ease-in')]),
    ]),
  ],
})
export class FooterComponent {
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
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false,
    },
  ];
  activeCollapse: boolean = false;
  activeContact: boolean = false;
  activeService: boolean = false;
  isAuthPage: boolean = false;
  activeUrl: string = '';

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const url = val.url || '';
        this.activeUrl = url;
      }
    });
  }

  ngOnInit(): void {
    if (this.activeUrl.startsWith('/login')) {
      this.isAuthPage = true;
    }
    else if (this.activeUrl.startsWith('/register')) {
      this.isAuthPage = true;
    }
    else if (this.activeUrl.startsWith('/forgot-password')) {
      this.isAuthPage = true;
    } else {
      this.isAuthPage = false;
    }
  }
}
