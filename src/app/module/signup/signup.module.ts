import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SignUpRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [SharedModule, SignUpRoutingModule],
  providers: [],
})
export class SignUpModule {}
