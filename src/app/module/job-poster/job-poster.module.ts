import { NgModule } from '@angular/core';
import { DynamicInputModule } from '@component/dynamic-input/dynamic-input.module';
import { SharedModule } from '@shared/shared.module';
import { JobPosterRoutingModule } from './job-poster-routing.module';
import { JobPosterComponent } from './job-poster.component';

@NgModule({
  declarations: [JobPosterComponent],
  imports: [DynamicInputModule, SharedModule, JobPosterRoutingModule],
  providers: [],
})
export class JobPosterModule {}
