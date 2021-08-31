import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { JobCatalogModel } from '../model/job.model';

@Injectable({ providedIn: 'any' })
export class JobService {
  constructor(private http: HttpClient) {}

  getAllJobs(): Observable<JobCatalogModel[]> {
    return this.http.get<JobCatalogModel[]>(
      'http://localhost:8080/api/v1/jobs'
    );
  }

  getJobById(id: number): Observable<JobCatalogModel> {
    return this.http.get<JobCatalogModel>(
      'http://localhost:8080/api/v1/jobs/' + id
    );
  }

  getJobByRecuiterId(id: number): Observable<JobCatalogModel[]> {
    return this.http.get<JobCatalogModel[]>(
      'http://localhost:8080/api/v1/jobs/recuiter/' + id
    );
  }

  applyForJob(postId: number) {
    const id: number = Number(localStorage.getItem('id'));
    const data = {
      postId: postId,
      userId: id,
    };
    return this.http.post(`http://localhost:8080/api/v1/jobs/apply`, data);
  }

  postJob(data: any) {
    return this.http.post('http://localhost:8080/api/v1/jobs/', data);
  }

  getJobApplicants(id: number) {
    return this.http.get('http://localhost:8080/api/v1/jobs/applicants/' + id);
  }
}
