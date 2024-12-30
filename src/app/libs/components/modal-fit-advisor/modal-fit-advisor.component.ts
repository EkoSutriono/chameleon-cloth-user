import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-fit-advisor',
  standalone: true,
  imports: [NzModalModule, FormsModule, NzFormModule, ReactiveFormsModule, NzInputModule, NzButtonModule],
  templateUrl: './modal-fit-advisor.component.html',
  styleUrl: './modal-fit-advisor.component.css'
})
export class ModalFitAdvisorComponent {
  @Input() isVisibleFit = false;
  @Output() closeModalFit = new EventEmitter<void>();

  validateForm = this.fb.group({
      weight: this.fb.control('', [Validators.required]),
      height: this.fb.control('', [Validators.required]),
  });
  
  constructor(private fb: NonNullableFormBuilder) {}
  
    showModal(): void {
      this.isVisibleFit = true;
    }
  
    handleOk(): void {
      this.isVisibleFit = false;
    }
  
    handleCancel(): void {
      this.isVisibleFit = false;
      this.closeModalFit.emit();
  }
  
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
