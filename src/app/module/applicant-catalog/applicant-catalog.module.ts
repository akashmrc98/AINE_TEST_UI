import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApplicantCatalogRoutingModule } from './applicant-catalog-routing.module';
import { ApplicantCatalogComponent } from './applicant-catalog.component';

@NgModule({
  declarations: [ApplicantCatalogComponent],
  imports: [SharedModule, ApplicantCatalogRoutingModule],
})
export class ApplicantCatalogModule {}
