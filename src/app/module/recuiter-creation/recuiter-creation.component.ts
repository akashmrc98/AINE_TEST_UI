import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@service/user.service';

@Component({
  selector: 'app-recuiter-creation',
  templateUrl: './recuiter-creation.component.html',
  styleUrls: ['./recuiter-creation.component.scss'],
})
export class RecuiterCreationComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  recuiterForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    role: new FormControl(null, [Validators.required]),
    company: new FormControl(null, [Validators.required]),
    about: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    website: new FormControl(null, [Validators.required]),
  });

  register() {
    this.userService
      .registerRecuiter(this.recuiterForm.value)
      .subscribe((res) => {
        this.router.navigate(['/', 'recuiter-dashboard']);
      });
  }
}
