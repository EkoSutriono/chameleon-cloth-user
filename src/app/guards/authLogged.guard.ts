import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    UrlTree,
  } from '@angular/router';
  import { Observable } from 'rxjs';
  import { Injectable } from '@angular/core';
  import { Router } from '@angular/router';
  @Injectable()
  export class AuthGuardLogged implements CanActivate {
    constructor(private router: Router) {}
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ):
      | boolean
      | UrlTree
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree> {
      const user = localStorage.getItem('auth-token');
      if (!user) {
        return true;
      } else {
        this.router.navigate(['dashboard']);
        return false;
      }
    }
  }
  