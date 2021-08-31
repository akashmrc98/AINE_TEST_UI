import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guard/auth.guard';
import { EmployeeGuard } from '@guard/employee.guard';
import { UserDashboardComponent } from './user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    canActivate: [AuthGuard, EmployeeGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDashBoardRoutingModule {}
