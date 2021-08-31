import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  uStrong = '^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$';
  error: boolean = false;
  message: string = '';

  userLoginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.uStrong),
    ]),
    password: new FormControl(null, [Validators.required]),
  });

  login() {
    const authData: any = this.userLoginForm.value;
    if (this.userLoginForm.valid) {
      this.userService.login(authData).subscribe(
        (data) => {
          if (data.id) {
            localStorage.setItem('id', data.id);
            localStorage.setItem('name', data.name);
            localStorage.setItem('role', data.userType);
            localStorage.setItem('username', data.username);
            localStorage.setItem('profileStatus', data.profileComplete);

            if (data.userType === 'Employee' && data.profileComplete)
              this.router.navigate(['/', 'job-catalog']);

            if (data.userType === 'Employer' && data.profileComplete)
              this.router.navigate(['recuiter-dashboard']);

            if (data.userType === 'Employee' && !data.profileComplete)
              this.router.navigate(['/', 'user']);

            if (data.userType === 'Employer' && !data.profileComplete)
              this.router.navigate(['recuiter']);
          }
        },
        (error) => {
          if (error) {
            this.error = true;
            this.message = 'Invalid username or password';
          }
        }
      );
    }
  }

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}
}
