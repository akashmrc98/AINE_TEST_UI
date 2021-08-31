import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RecuiterCreationRoutingModule } from './recuiter-creation-routing.module';
import { RecuiterCreationComponent } from './recuiter-creation.component';

@NgModule({
  declarations: [RecuiterCreationComponent],
  imports: [SharedModule, RecuiterCreationRoutingModule],
  providers: [],
})
export class RecuiterCreationModule {}
