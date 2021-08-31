import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NewEmployeeGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot) {
    const status = localStorage.getItem('profileStatus') === 'false';
    const role = localStorage.getItem('role') === 'Employee';
    if (status && role) return true;
    return false;
  }
}
