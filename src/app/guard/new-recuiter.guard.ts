import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NewRecuiterGuard implements CanActivate {
  canActivate() {
    const status = localStorage.getItem('profileStatus') === 'false';
    const role = localStorage.getItem('role') === 'Employer';
    if (status && role) return true;
    return false;
  }
}
