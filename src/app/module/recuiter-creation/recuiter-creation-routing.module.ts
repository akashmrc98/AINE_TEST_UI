import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guard/auth.guard';
import { NewRecuiterGuard } from '@guard/new-recuiter.guard';
import { RecuiterCreationComponent } from './recuiter-creation.component';

const routes: Routes = [
  {
    path: '',
    component: RecuiterCreationComponent,
    canActivate: [AuthGuard, NewRecuiterGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuiterCreationRoutingModule {}
