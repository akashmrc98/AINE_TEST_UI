import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimeFormatterPipe } from './time-formatter.pipe';

@NgModule({
  declarations: [TimeFormatterPipe],
  imports: [CommonModule],
  exports: [TimeFormatterPipe],
})
export class TimeFormatterModule {}
