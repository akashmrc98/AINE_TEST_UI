import { NgModule } from '@angular/core';
import { DynamicInputModule } from '@component/dynamic-input/dynamic-input.module';
import { SharedModule } from '@shared/shared.module';
import { UserCreationRoutingModule } from './user-creation-routing.module';
import { UserCreationComponent } from './user-creation.component';

@NgModule({
  declarations: [UserCreationComponent],
  imports: [DynamicInputModule, SharedModule, UserCreationRoutingModule],
})
export class UserCreationModule {}
