import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guard/auth.guard';
import { RecuiterGuard } from '@guard/recuiter.guard';
import { RecuiterDashboardComponent } from './recuiter-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: RecuiterDashboardComponent,
    canActivate: [AuthGuard, RecuiterGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuiterDashBoardRoutingModule {}
