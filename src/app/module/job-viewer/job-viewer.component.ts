import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '@service/job.service';
import { JobCatalogModel } from '@model/job.model';

@Component({
  selector: 'app-job-viewer',
  templateUrl: './job-viewer.component.html',
  styleUrls: ['./job-viewer.component.scss'],
})
export class JobViewerComponent implements OnInit {
  constructor(private jobService: JobService, private route: ActivatedRoute) {}

  job: JobCatalogModel = {
    applicants: [],
    company: {
      about: '',
      address: '',
      company: '',
      id: 0,
      website: '',
    },
    ctc: [],
    description: '',
    experience: [],
    id: 0,
    job: {
      role: '',
      education: [],
      id: 0,
      profiles: [],
      responsibilities: '',
      skills: [],
    },
    location: [],
    postedAt: null,
    title: '',
    recuiter: {
      email: '',
      name: '',
      phone: '',
      jobRole: '',
    },
  };

  isApplied: boolean = false;
  ngOnInit(): void {
    this.route.params.subscribe((id) => {
      this.jobService.getJobById(id.id).subscribe((job) => {
        this.job = job;
      });
    });
  }

  isError: boolean = false;

  apply(id: number) {
    this.jobService.applyForJob(id).subscribe(
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
  }

  scroll(element: HTMLElement) {
    element.scrollIntoView();
  }
}
