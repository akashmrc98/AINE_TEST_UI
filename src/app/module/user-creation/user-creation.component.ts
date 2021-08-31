import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@service/user.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss'],
})
export class UserCreationComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  education: string[] = [];
  skills: string[] = [];
  file: File;
  resume: any;

  recuiterForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    about: new FormControl(null, [Validators.required]),
    others: new FormControl(null, [Validators.required]),
  });
  ngOnInit(): void {}

  getSkills(data) {
    this.skills = data;
  }
  getEducations(data) {
    this.education = data;
  }

  selectFile(data) {
    const formData: FormData = new FormData();
    const file: File = data.target.files[0];
    console.log(file);
    formData.append('file', file);
    this.userService.uploadResume(formData).subscribe((res) => {
      this.resume = res;
    });
  }

  register() {
    const data = {
      ...this.recuiterForm.value,
      education: this.education,
      skills: this.skills,
      resume: this.resume,
    };
    this.userService
      .registerEmployee(data)
      .subscribe((res) => this.router.navigate(['/', 'job-catalog']));
  }
}
