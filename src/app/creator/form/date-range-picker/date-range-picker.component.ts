import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';

const DATE_FORMAT = 'dd-MM-yyyy';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRangePickerComponent {
  @Input() dateRangePicker: FormGroup;
  @Input() dateIndex: number;
  @Input() formName: string;
  @Input() formNameStartDate: string;
  @Input() formNameEndDate: string;
  isVisible = true;
  date: any;

  constructor(private datePipe: DatePipe) {
  }

  setAll(checked: boolean) {
    const dateField = this.dateRangePicker.get(this.formName).value[this.dateIndex];
    dateField.startDate = this.convertDate(dateField.startDate);
    dateField.endDate = this.convertDate(dateField.endDate);

    console.log(dateField.startDate);
    console.log('Value: ' + checked);
    this.isVisible = !checked;
  }

  private convertDate(date: string): string {
    return this.datePipe.transform(date, DATE_FORMAT);
  }

  getClasses() {
    if (this.isVisible) {
      return '';
    } else {
      return 'vertical-item';
    }
  }
}
