import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TimeFormatterModule } from 'pipe/time-formatter.module';
import { JobViewerRoutingModule } from './job-viewer-routing.module';
import { JobViewerComponent } from './job-viewer.component';

@NgModule({
  declarations: [JobViewerComponent],
  imports: [TimeFormatterModule, SharedModule, JobViewerRoutingModule],
})
export class JobViewerModule {}
