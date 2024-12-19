import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule, NzIconModule, NzAlertModule, NzFormModule, ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzInputModule, NzSelectModule, CommonModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  private destroy$ = new Subject<void>();
  validateForm = this.fb.group({
    email: this.fb.control('', [Validators.email, Validators.required]),
    username: this.fb.control('', [Validators.required]),
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
  selectedKabupaten = null

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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

  confirmationValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return { required: true };
    } 
    // else if (control.value !== this.validateForm.controls.password.value) {
    //   return { confirm: true, error: true };
    // }
    return {};
  }

}
