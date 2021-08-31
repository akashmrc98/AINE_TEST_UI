import { NgModule } from '@angular/core';
import { JobListModule } from '@component/job-list/job-list.module';
import { SharedModule } from '@shared/shared.module';
import { RecuiterDashBoardRoutingModule } from './recuiter-dashboard-routing.module';
import { RecuiterDashboardComponent } from './recuiter-dashboard.component';

@NgModule({
  declarations: [RecuiterDashboardComponent],
  imports: [JobListModule, SharedModule, RecuiterDashBoardRoutingModule],
})
export class RecuiterDashBoardModule {}
