import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobCatalogModel } from '@model/job.model';
import { JobService } from '@service/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent {
  constructor(private router: Router, private jobService: JobService) {}

  @Input() isRecuiter: boolean = false;
  @Input() isEmployee: boolean = true;
  @Input() data: JobCatalogModel[];

  isApplied: boolean = false;
  isError: boolean = false;

  apply(postId: number) {
    this.jobService.applyForJob(postId).subscribe(
      (res) => {
        if (res) {
          this.isApplied = true;
          this.isError = false;
        }
      },
      (error) => {
        if (error) {
          this.isApplied = false;
          this.isError = true;
        }
      }
    );
    this.isApplied = true;
  }

  applicants(id) {
    console.log(id);
    this.router.navigate(['/', 'applicant-catalog', id]);
  }
}
