import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
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

  constructor() {
  }

  setAll(checked: boolean) {
    const date = new Date();
    date.setUTCHours(0, 0, 0, 0);
    const forms = this.dateRangePicker.get(this.formName) as FormArray;
    forms.controls[this.dateIndex].patchValue({endDate: date.toISOString()});
    this.isVisible = !checked;
  }

  getClasses() {
    if (this.isVisible) {
      return '';
    } else {
      return 'vertical-item';
    }
  }
}
