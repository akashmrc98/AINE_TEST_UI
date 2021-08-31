import { NgModule } from '@angular/core';
import { JobListModule } from '@component/job-list/job-list.module';
import { SharedModule } from '@shared/shared.module';
import { JobCatalogRoutingModule } from './job-catalog-routing.module';
import { JobCatalogComponent } from './job-catalog.component';

@NgModule({
  declarations: [JobCatalogComponent],
  imports: [JobListModule, SharedModule, JobCatalogRoutingModule],
})
export class JobCatalogModule {}
