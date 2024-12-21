import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, NzFormModule, ReactiveFormsModule, NzInputModule, NzIconModule, NzSelectModule, CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  selectedKabupaten: string = ''
  validateForm = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      fullname: this.fb.control('', [Validators.required]),
      address1: this.fb.control('', [Validators.required]),
      address2: this.fb.control('', [Validators.required]),
      district: this.fb.control('', [Validators.required]),
      city: this.fb.control('', [Validators.required]),
      province: this.fb.control('', [Validators.required]),
      zipCode: this.fb.control('', [Validators.required]),
      phoneNumberPrefix: this.fb.control<'+62'>('+62'),
      phoneNumber: this.fb.control('', [Validators.required]),
    });

  constructor(
    private fb: NonNullableFormBuilder,
    public route: Router
  ) { }
  
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
