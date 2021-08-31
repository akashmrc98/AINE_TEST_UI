import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guard/auth.guard';
import { JobCatalogComponent } from './job-catalog.component';

const routes: Routes = [
  { path: '', component: JobCatalogComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobCatalogRoutingModule {}
