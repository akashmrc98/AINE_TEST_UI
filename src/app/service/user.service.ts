import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class UserService {
  constructor(private http: HttpClient) {}
  login(data: any): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/api/v1/users/login',
      data
    );
  }

  signup(data) {
    return this.http.post('http://localhost:8080/api/v1/users', data);
  }

  registerRecuiter(data) {
    return this.http.post(
      'http://localhost:8080/api/v1/users/recuiter/' +
        localStorage.getItem('id'),
      data
    );
  }

  registerEmployee(data) {
    return this.http.post(
      'http://localhost:8080/api/v1/users/employee/' +
        localStorage.getItem('id'),
      data
    );
  }

  appliedJobs(data) {
    return this.http.get(
      'http://localhost:8080/api/v1/users/applications/' +
        localStorage.getItem('id'),
      data
    );
  }

  uploadResume(data) {
    return this.http.post(
      'http://localhost:8080/api/v1/users/employee/' +
        localStorage.getItem('id') +
        '/resume',
      data
    );
  }
}
