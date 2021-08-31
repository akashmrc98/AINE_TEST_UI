import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeFormatter',
})
export class TimeFormatterPipe implements PipeTransform {
  transform(date: any): unknown {
    if (moment().diff(date, 'days') === 0) {
      return 'Posted today';
    }
    return 'Posted ' + moment().diff(date, 'days') + ' days ago.';
  }
}
