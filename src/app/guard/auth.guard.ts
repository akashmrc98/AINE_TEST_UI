import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const isAuth = localStorage.getItem('username');
    if (isAuth) return true;
    this.router.navigate(['/', 'login']);
    return false;
  }
}
