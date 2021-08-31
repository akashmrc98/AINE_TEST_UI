import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RecuiterGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const role = localStorage.getItem('role');
    if (role === 'Employer') return true;
    return false;
  }
}
