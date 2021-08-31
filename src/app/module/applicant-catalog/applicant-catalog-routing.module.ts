import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guard/auth.guard';
import { RecuiterGuard } from '@guard/recuiter.guard';
import { ApplicantCatalogComponent } from './applicant-catalog.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicantCatalogComponent,
    canActivate: [AuthGuard, RecuiterGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicantCatalogRoutingModule {}
