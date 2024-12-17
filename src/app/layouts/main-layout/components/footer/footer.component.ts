import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
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
  activeCollapse: boolean = false;
}
