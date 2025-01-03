import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, takeUntil } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { REFRESH_TOKEN } from '../constants/endpoint.const';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private destroy$ = new Subject<void>();
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    public baseService: BaseService
  ) {}

  async refreshToken(): Promise<void> {
    const refreshToken = localStorage.getItem('refresh-token');

    if (!refreshToken) {
      console.error('No refresh token found in localStorage');
      return;
    }

    const params = { refresh_token: refreshToken };

    try {
      const response = await this.baseService
        .postData(REFRESH_TOKEN, params)
        .toPromise();

      if (response?.data) {
        localStorage.setItem('auth-token', response.data.access_token);
        localStorage.setItem('refresh-token', response.data.refresh_token);
      }
    } catch (err) {
      console.error('Failed to refresh token', err);
    }
  }

  logout() {
    this.localStorageService.signOut();
  }
}
