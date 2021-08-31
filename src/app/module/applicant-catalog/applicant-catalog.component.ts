import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '@service/job.service';

@Component({
  selector: 'app-applicant-catalog',
  templateUrl: './applicant-catalog.component.html',
  styleUrls: ['./applicant-catalog.component.scss'],
})
export class ApplicantCatalogComponent implements OnInit {
  constructor(private jobService: JobService, private route: ActivatedRoute) {}

  data: any;

  ngOnInit(): void {
    this.route.params.subscribe((id) => {
      this.jobService.getJobApplicants(id.id).subscribe((d) => {
        console.log(d);
        this.data = d;
      });
    });
  }

  download(resultByte) {
    var blob = new Blob([resultByte], { type: 'application/pdf' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'resume.pdf';
    link.click();
  }
}
