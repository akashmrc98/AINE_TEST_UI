import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@material/material.module';
import { TimeFormatterModule } from 'pipe/time-formatter.module';
import { JobListComponent } from './job-list.component';

@NgModule({
  declarations: [JobListComponent],
  imports: [
    TimeFormatterModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [JobListComponent],
})
export class JobListModule {}
