import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TimeFormatterModule } from 'pipe/time-formatter.module';
import { UserDashBoardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';

@NgModule({
  declarations: [UserDashboardComponent],
  imports: [SharedModule, TimeFormatterModule, UserDashBoardRoutingModule],
})
export class UserDashBoardModule {}
