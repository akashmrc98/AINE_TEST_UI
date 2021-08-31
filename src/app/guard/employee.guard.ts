import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EmployeeGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot) {
    const role = localStorage.getItem('role');
    if (role === 'Employee') return true;
    return false;
  }
}
