import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@material/material.module';
import { DynamicInputComponent } from './dynamic-input.component';

@NgModule({
  declarations: [DynamicInputComponent],
  imports: [MaterialModule, RouterModule, ReactiveFormsModule, CommonModule],
  exports: [DynamicInputComponent],
})
export class DynamicInputModule {}
