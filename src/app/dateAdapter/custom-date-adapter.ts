import {NativeDateAdapter} from '@angular/material';
import * as moment from 'moment';


export class CustomDateAdapter extends NativeDateAdapter {

  getDayOfWeekNames(style): string[] {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  }

  getFirstDayOfWeek(): number {
    return 1;
  }

  format(date: Date, displayFormat): string {
    if (displayFormat === 'input') {
      const day = ('0' + date.getDate()).slice(-2);
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
    return date.toDateString();
  }


  createDate(year: number, month: number, date: number): Date {
    if (month < 0 || month > 11) {
      throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
    }

    if (date < 1) {
      throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
    }

    const result = moment.utc({year, month, date}).locale(this.locale);

    if (!result.isValid()) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }

    return result.toDate();
  }
}
