import { Component, OnInit } from '@angular/core';
import { JobCatalogModel } from '@model/job.model';
import { JobService } from '@service/job.service';

@Component({
  selector: 'app-recuiter-dashboard',
  templateUrl: './recuiter-dashboard.component.html',
  styleUrls: ['./recuiter-dashboard.component.scss'],
})
export class RecuiterDashboardComponent implements OnInit {
  constructor(private jobService: JobService) {}
  isEmp = false;
  isRec = true;
  data: JobCatalogModel[] = [];

  ngOnInit(): void {
    let id: number = Number(localStorage.getItem('id'));
    this.jobService.getJobByRecuiterId(id).subscribe((job) => {
      this.data = job;
    });
  }
}
