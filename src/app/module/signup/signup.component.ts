import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '@service/user.service';
import { Validations } from '@validator/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  passwordHide: boolean = true;
  passwordError: boolean = false;
  strong =
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}';
  uStrong = '^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$';
  phoneStrong = '[0-9]{10,12}';

  message: string = '';
  isError: boolean = false;

  roles: string[] = ['Employer', 'Employee'];

  userForm: FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.pattern(this.phoneStrong),
      ]),
      userType: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(22),
        Validators.pattern(this.uStrong),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(22),
        Validators.pattern(this.strong),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
    {
      validators: [Validations.MatchPassword],
    }
  );

  createUser() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      this.userService.signup(userData).subscribe(
        (next) => {
          this.userForm.reset();
          this.isError = true;
          this.message = 'User Registered Successfully.';
        },
        (error) => {
          console.log(error);
          if (error) {
            this.isError = true;
            this.message = 'Something went wrong try again later.';
          }
        }
      );
    }
  }
}
