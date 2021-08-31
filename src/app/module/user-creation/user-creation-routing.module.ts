import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guard/auth.guard';
import { NewEmployeeGuard } from '@guard/new-employee.guard';
import { UserCreationComponent } from './user-creation.component';

const routes: Routes = [
  {
    path: '',
    component: UserCreationComponent,
    canActivate: [AuthGuard, NewEmployeeGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCreationRoutingModule {}
