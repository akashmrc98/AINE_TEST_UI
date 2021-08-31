import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '@service/job.service';

@Component({
  selector: 'app-job-poster',
  templateUrl: './job-poster.component.html',
  styleUrls: ['./job-poster.component.scss'],
})
export class JobPosterComponent implements OnInit {
  constructor(private jobService: JobService, private router: Router) {}

  location: string[] = [];
  profile: string[] = [];
  education: string[] = [];
  skills: string[] = [];

  ngOnInit(): void {}
  recuiterForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    jobRole: new FormControl(null, [Validators.required]),
    responsibilites: new FormControl(null, [Validators.required]),
    minExp: new FormControl(null, [Validators.required]),
    maxExp: new FormControl(null, [Validators.required]),
    minCtc: new FormControl(null),
    maxCtc: new FormControl(null),
  });

  getLocations(data) {
    this.location = data;
  }
  getSkills(data) {
    this.skills = data;
  }
  getEducations(data) {
    this.education = data;
  }
  getProfiles(data) {
    this.profile = data;
  }

  postData() {
    if (this.recuiterForm.valid) {
      const data: any = {
        title: this.recuiterForm.get('title').value,
        description: this.recuiterForm.get('description').value,
        jobRole: this.recuiterForm.get('jobRole').value,
        responsibilites: this.recuiterForm.get('responsibilites').value,
        location: this.location,
        profile: this.profile,
        education: this.education,
        skills: this.skills,
        recuiterId: localStorage.getItem('id'),
        exp: [
          this.recuiterForm.get('minExp').value,
          this.recuiterForm.get('maxExp').value,
        ],
        ctc: [
          this.recuiterForm.get('minCtc').value,
          this.recuiterForm.get('maxCtc').value,
        ],
      };
      this.jobService.postJob(data).subscribe((res) => {
        this.recuiterForm.reset();
        this.router.navigate(['/', 'recuiter-dashboard']);
      });
    }
  }
}
