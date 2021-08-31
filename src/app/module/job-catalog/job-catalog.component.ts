import { Component, OnInit } from '@angular/core';
import { JobCatalogModel } from '@model/job.model';
import { JobService } from '@service/job.service';

@Component({
  selector: 'app-job-catalog',
  templateUrl: './job-catalog.component.html',
  styleUrls: ['./job-catalog.component.scss'],
})
export class JobCatalogComponent implements OnInit {
  constructor(private jobService: JobService) {}
  data: JobCatalogModel[] = [];
  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
