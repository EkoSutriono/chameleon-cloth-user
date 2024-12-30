import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-size-chart',
  standalone: true,
  imports: [NzModalModule],
  templateUrl: './modal-size-chart.component.html',
  styleUrl: './modal-size-chart.component.css'
})
export class ModalSizeChartComponent {
  @Input() isVisible = false;
  @Output() closeModalSize = new EventEmitter<void>();

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.closeModalSize.emit();
  }
}
