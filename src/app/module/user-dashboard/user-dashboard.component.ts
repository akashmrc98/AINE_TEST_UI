import { Component, OnInit } from '@angular/core';
import { UserService } from '@service/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  constructor(private userService: UserService) {}

  data: any;
  ngOnInit(): void {
    this.userService
      .appliedJobs(Number(localStorage.getItem('id')))
      .subscribe((d) => {
        this.data = d;
      });
  }
}
