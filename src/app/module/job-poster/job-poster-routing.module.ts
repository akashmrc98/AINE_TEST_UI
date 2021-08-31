import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guard/auth.guard';
import { RecuiterGuard } from '@guard/recuiter.guard';
import { JobPosterComponent } from './job-poster.component';

const routes: Routes = [
  {
    path: '',
    component: JobPosterComponent,
    canActivate: [AuthGuard, RecuiterGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobPosterRoutingModule {}
